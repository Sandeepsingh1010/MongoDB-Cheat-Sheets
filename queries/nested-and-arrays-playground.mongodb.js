// playground.mongodb.js
// ================================================================
// MONGODB NESTED OBJECTS & ARRAYS PLAYGROUND
// ================================================================
// Topics: Querying nested fields with dot notation, Array queries
//
// Prerequisites: Run foundations/database-and-collections-playground.mongodb.js first
// ================================================================

use("mongo_course_playground");



// ================================================================
// SECTION 17 — QUERY INSIDE NESTED OBJECTS
// ================================================================
// Dot notation lets you query nested fields.
//
// Example:
// SELECT * FROM students WHERE address.city = 'Toronto';
db.students.find({ "address.city": "Toronto" }).pretty();

//incorrect syntax that doesn't work:
db.students.find({ address: { city: "Toronto" } })



// ================================================================
// SECTION 18 — QUERY ARRAYS
// ================================================================
// This finds documents where the skills array contains "SQL".
db.students.find({ skills: "SQL" }).pretty();
