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
// SECTION 34 — INTRO TO AGGREGATION
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
// SECTION 35 — AGGREGATION WITH AVERAGE
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
// SECTION 36 — MATCH + GROUP
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
// SECTION 37 — SORT AGGREGATION RESULTS
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
