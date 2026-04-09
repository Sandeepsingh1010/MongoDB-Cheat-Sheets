// playground.mongodb.js
// ================================================================
// MONGODB AGGREGATION PLAYGROUND
// ================================================================
// Topics: Aggregation pipelines, $match, $group, $sort, accumulators ($sum, $avg)
//
// Prerequisites: Run foundations/database-and-collections-playground.mongodb.js first
// ================================================================

use("mongo_course_playground");



// ================================================================
// SECTION 6.1 — INTRO TO AGGREGATION
// ================================================================
// Aggregation is like SQL GROUP BY + calculations + transformations.
//
// This pipeline groups students by major
// and counts how many students are in each major.
//
// Stages:
// - $group: group documents
//
// Important accumulator detail:
// - { $sum: 1 } means "add 1 per document in the group"
//   so it behaves like SQL COUNT(*) for each group.
// - { $sum: "$age" } would add age values instead,
//   giving the total age per group.
//
// Special note:
// - _id inside $group becomes the "group by" field.
db.students.aggregate([
  {
    $group: {
      _id: "$major",
      totalStudents: { $sum: 1 }
    }
  }
]);



// ================================================================
// SECTION 6.2 — AGGREGATION WITH AVERAGE
// ================================================================
// Calculate average age by major.
// Here we use multiple accumulators together:
// - $avg: "$age"      -> average value of age in each group
// - $sum: 1            -> number of docs in each group
//
// SQL equivalent idea:
// SELECT major, AVG(age) AS averageAge, COUNT(*) AS totalStudents
// FROM students
// GROUP BY major;
db.students.aggregate([
  {
    $group: {
      _id: "$major",
      averageAge: { $avg: "$age" },
      totalStudents: { $sum: 1 }
    }
  }
]);



// ================================================================
// SECTION 6.3 — MATCH + GROUP
// ================================================================
// Similar idea to:
// SELECT major, COUNT(*)
// FROM students
// WHERE enrolled = true
// GROUP BY major;
db.students.aggregate([
  {
    $match: { enrolled: true }
  },
  {
    $group: {
      _id: "$major",
      totalEnrolled: { $sum: 1 }
    }
  }
]);



// ================================================================
// SECTION 6.4 — SORT AGGREGATION RESULTS
// ================================================================
// $sort orders the documents currently in the pipeline.
// Here, $sort runs after $group, so we sort grouped results
// (one row per major), not raw student documents.
//
// totalStudents: -1 means descending order (largest count first).
// totalStudents: 1 means ascending order (smallest count first).
//
// If two majors have the same totalStudents value, output order between
// them is not guaranteed unless you add a second sort key.
// Example: { $sort: { totalStudents: -1, _id: 1 } }
//
// SQL equivalent idea:
// SELECT major, COUNT(*) AS totalStudents
// FROM students
// GROUP BY major
// ORDER BY totalStudents DESC, major ASC;
db.students.aggregate([
  {
    $group: {
      _id: "$major",
      totalStudents: { $sum: 1 }
    }
  },
  {
    $sort: { totalStudents: -1 }
  }
]);



// ================================================================
// SECTION 6.5 — $UNWIND (Decompose Arrays)
// ================================================================
// $unwind takes an array field and creates a separate document
// for each array element. This is essential for analyzing nested data.
//
// Example:
// Before: { _id: 1, name: "Alice", skills: ["MongoDB", "Python", "SQL"] }
// After $unwind: Three separate documents
//   { _id: 1, name: "Alice", skills: "MongoDB" }
//   { _id: 1, name: "Alice", skills: "Python" }
//   { _id: 1, name: "Alice", skills: "SQL" }
//
// Common use case: Count skills per major
// Or: Count how many students have each skill
db.students.aggregate([
  { $unwind: "$skills" },
  {
    $group: {
      _id: "$major",
      uniqueSkills: { $sum: 1 }
    }
  },
  { $sort: { uniqueSkills: -1 } }
]);

// If students may have missing or empty skills arrays,
// use preserveNullAndEmptyArrays to keep them in results:
db.students.aggregate([
  { 
    $unwind: { 
      path: "$skills",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $group: {
      _id: "$major",
      skillCount: { $sum: 1 }
    }
  }
]);

// Another example: Count how many students have each skill
db.students.aggregate([
  { $unwind: "$skills" },
  {
    $group: {
      _id: "$skills",
      studentCount: { $sum: 1 }
    }
  },
  { $sort: { studentCount: -1 } }
]);



// ================================================================
// SECTION 6.6 — $CONCAT (Concatenate Strings)
// ================================================================
// $concat combines multiple strings or field values into one string.
// Useful for creating composite fields or formatted output.
//
// Syntax: { $concat: ["string1", "$field1", "string2", "$field2"] }
//
// Common use cases:
// - Create full names from first/last name fields
// - Create descriptions combining multiple fields
// - Format output for display/export
db.students.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      major: 1,
      // Concatenate name, age, and major into one formatted string
      studentInfo: {
        $concat: ["$name", " (", "$major", ") - Age: ", { $toString: "$age" }]
      }
    }
  }
]);

// Result example:
// { name: "John", major: "CSE", studentInfo: "John (CSE) - Age: 21" }
// { name: "Alice", major: "Math", studentInfo: "Alice (Math) - Age: 22" }

// Create a description by combining fields
// Example: Create "name - address.city" format
db.students.aggregate([
  {
    $project: {
      _id: 0,
      description: { $concat: ["$name", " - ", "$address.city"] }
    }
  }
]);

// Result: { description: "John - Toronto" }

// Use with $group for composite grouping keys
db.students.aggregate([
  {
    $group: {
      _id: { $concat: ["$major", "-", "$year"] },
      count: { $sum: 1 }
    }
  }
]);

// Result: { _id: "CSE-2024", count: 15 }, { _id: "Math-2024", count: 8 }



