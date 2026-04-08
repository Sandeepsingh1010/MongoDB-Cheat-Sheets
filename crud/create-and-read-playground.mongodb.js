// playground.mongodb.js
// ================================================================
// MONGODB CREATE & READ PLAYGROUND
// ================================================================
// Topics: insertOne, insertMany, find, findOne, pretty output
//
// Note: This covers the insert and basic read operations.
// For full CRUD workflow, also see update-delete-and-upsert-playground.mongodb.js
//
// Prerequisites: Run foundations/database-and-collections-playground.mongodb.js first
// ================================================================

use("mongo_course_playground");



// ================================================================
// SUMMARY: CREATE OPERATIONS
// ================================================================
// - insertOne:  Insert a single document
// - insertMany: Insert multiple documents at once
//
// All detailed examples are in foundations/database-and-collections-playground.mongodb.js
// Run those sections first to populate the collection.



// ================================================================
// SUMMARY: READ OPERATIONS
// ================================================================
// - find():     Return all matching documents (or filtered)
// - findOne():  Return single matching document
// - pretty():   Format output for readability
// - projection: Select which fields to return

// After running the foundations playground, try these:
// Find all students
db.students.find({}).pretty();

// Find one student by name
db.students.findOne({ name: "Ali" });

// Find with projection (name and age only)
db.students.find(
  {},
  { _id: 0, name: 1, age: 1 }
).pretty();

// Find with filter and projection
db.students.find(
  { major: "Computer Science" },
  { _id: 0, name: 1, major: 1 }
).pretty();
