// playground.mongodb.js
// ================================================================
// MONGODB QUERYING & PROJECTION PLAYGROUND
// ================================================================
// Topics: Filtering, Comparison operators, Logical operators, Projection, Sort, Limit
//
// Prerequisites: Run foundations/database-and-collections-playground.mongodb.js first
// ================================================================

use("mongo_course_playground");



// ================================================================
// SECTION 8 — BASIC FILTERING
// ================================================================
// In MongoDB, find({ condition }) is like SQL WHERE.
//
// Example:
// SELECT * FROM students WHERE major = 'Computer Science';
db.students.find({ major: "Computer Science" }).pretty();



// ================================================================
// SECTION 9 — FILTER BY NUMBER COMPARISON
// ================================================================
// MongoDB operators:
// - $gt  = greater than
// - $gte = greater than or equal
// - $lt  = less than
// - $lte = less than or equal
//
// Example:
// SELECT * FROM students WHERE age > 20;
db.students.find({ age: { $gt: 20 } });



// ================================================================
// SECTION 10 — FILTER WITH MULTIPLE CONDITIONS
// ================================================================
// This is like:
// SELECT * FROM students
// WHERE major = 'Computer Science' AND enrolled = true;
db.students.find({
  major: "Computer Science",
  enrolled: true
}).pretty();



// ================================================================
// SECTION 11 — USING OR
// ================================================================
// This is like:
// SELECT * FROM students
// WHERE age < 20 OR major = 'Mathematics';
db.students.find({
  $or: [
    { age: { $lt: 20 } },
    { major: "Mathematics" }
  ]
}).pretty();



// ================================================================
// SECTION 12 — PROJECT ONLY CERTAIN FIELDS
// ================================================================
// Projection means choosing which fields to return.
//
// This is like:
// SELECT name, major FROM students;
//
// In MongoDB:
// - 1 means include field
// - 0 means exclude field
// - _id is included by default unless explicitly excluded
db.students.find(
  {},
  { name: 1, major: 1 }
).pretty();



// ================================================================
// SECTION 13 — EXCLUDE _id
// ================================================================
// This is useful because MongoDB includes _id automatically.
db.students.find(
  {},
  { _id: 0, name: 1, major: 1 }
).pretty();



// ================================================================
// SECTION 14 — SORT RESULTS
// ================================================================
// sort({ age: 1 })  => ascending
// sort({ age: -1 }) => descending
//
// Similar to:
// SELECT * FROM students ORDER BY age ASC;
db.students.find({}).sort({ age: 1 }).pretty();



// ================================================================
// SECTION 15 — LIMIT RESULTS
// ================================================================
// Similar to limiting the number of rows returned.
db.students.find({}).sort({ age: 1 }).limit(3).pretty();

db.students.find({}).limit(3).sort({ age: 1 }).pretty();


// ================================================================
// SECTION 16 — FIND ONE DOCUMENT
// ================================================================
// findOne() returns a single matching document.
db.students.findOne({ name: "Ali" });
