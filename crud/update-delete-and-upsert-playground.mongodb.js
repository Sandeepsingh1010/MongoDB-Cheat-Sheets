// playground.mongodb.js
// ================================================================
// MONGODB UPDATE, DELETE & UPSERT PLAYGROUND
// ================================================================
// Topics: updateOne, updateMany, deleteOne, deleteMany, $set, $inc, $push, $unset, $rename, upsert
//
// Prerequisites: Run foundations/database-and-collections-playground.mongodb.js first
// ================================================================

use("mongo_course_playground");



// ================================================================
// SECTION 19 — UPDATE ONE DOCUMENT
// ================================================================
// In MongoDB, updates use operators like:
// - $set    : assign / replace field values
// - $inc    : increase a number
// - $unset  : remove a field
// - $push   : add one item to an array
// - $rename : rename a field
//
// Example:
// change Ali's age to 22
db.students.updateOne(
  { name: "Ali" },
  { $set: { age: 22 } }
);



// ================================================================
// SECTION 20 — VERIFY THE UPDATE
// ================================================================
db.students.find({ name: "Ali" }).pretty();



// ================================================================
// SECTION 21 — INCREMENT A VALUE
// ================================================================
// Increase Sara's age by 1.
// Useful for counters, quantities, scores, etc.
db.students.updateOne(
  { name: "Sara" },
  { $inc: { age: 1 } }
);

db.students.find({ name: "Sara" }).pretty();



// ================================================================
// SECTION 22 — ADD A FIELD TO AN EXISTING DOCUMENT
// ================================================================
// MongoDB schema is flexible.
// Documents in the same collection do not all need the same fields.
db.students.updateOne(
  { name: "John" },
  { $set: { gpa: 3.4 } }
);

db.students.find({ name: "John" }).pretty();



// ================================================================
// SECTION 23 — REMOVE A FIELD
// ================================================================
// $unset removes a field from a document.
db.students.updateOne(
  { name: "John" },
  { $unset: { gpa: "" } }
);

db.students.find({ name: "John" }).pretty();



// ================================================================
// SECTION 24 — PUSH INTO AN ARRAY
// ================================================================
// Add a new skill to Mina's skills array.
db.students.updateOne(
  { name: "Mina" },
  { $push: { skills: "Aggregation" } }
);

db.students.find({ name: "Mina" }).pretty();



// ================================================================
// SECTION 25 — UPDATE MANY DOCUMENTS
// ================================================================
// This updates all documents matching the filter.
//
// Example:
// mark all Computer Science students as club members
db.students.updateMany(
  { major: "Computer Science" },
  { $set: { clubMember: true } }
);

db.students.find({ major: "Computer Science" }).pretty();



// ================================================================
// SECTION 26 — RENAME FIELDS IN MANY DOCUMENTS
// ================================================================
// $rename renames a field in documents that have it.
db.students.updateMany(
  { Cources: { $exists: true } },
  { $rename: { "Cources": "courses" } }
);



// ================================================================
// SECTION 27 — DELETE ONE DOCUMENT
// ================================================================
// This deletes the first matching document.
//
// Be careful with delete operations.
db.students.deleteOne({ name: "Omar" });

db.students.find({}).pretty();



// ================================================================
// SECTION 28 — DELETE MANY DOCUMENTS
// ================================================================
// This deletes all students who are not enrolled.
db.students.deleteMany({ enrolled: false });

db.students.find({}).pretty();
