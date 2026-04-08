// playground.mongodb.js
// ================================================================
// MONGODB PRACTICE CHALLENGES PLAYGROUND
// ================================================================
// Topics: Comprehensive review of all CRUD, querying, and aggregation concepts
//
// Prerequisites: Run all other playground files first to understand all concepts
// ================================================================

use("mongo_course_playground");



// ================================================================
// SECTION 40 — PRACTICE CHALLENGES
// ================================================================
// Try these yourself. Solutions with feedback are provided below.
//
// Re-run the foundations/database-and-collections-playground.mongodb.js first
// to repopulate your collection with fresh data.
//

// 1) Insert a new student named "Lina" aged 23 in Mathematics.
db.students.insertOne({name:"Lina",age:23,major:"Mathematics"});
// ✓ CORRECT: insertOne adds a single new document with the provided fields.

// 2) Find all students older than 21.
db.students.find({age:{$gt:21}}).pretty();
// ✓ CORRECT: Use {age:{$gt:21}} to filter with the greater-than operator $gt.

// 3) Return only name and age, without _id.
db.students.find({},{_id:0,name:1,age:1}).pretty();
// ✓ CORRECT: Projection uses 1 to include fields, 0 to exclude. Set _id:0 since _id is included by default.

// 4) Add "MongoDB" to Ali's skills.
db.students.updateOne({name:"Ali"},{$push:{skills:"MongoDB"}});
// ✓ CORRECT: $push adds one item to an array without replacing the entire array.

// 5) Delete all students in Mathematics.
db.students.deleteMany({major:"Mathematics"});
// ✓ CORRECT: deleteMany removes ALL matching documents. Verify filter before deleting to avoid accidents!

// 6) Count how many students are left.
db.students.countDocuments({});
// ✓ CORRECT: Empty filter {} counts all documents. Use countDocuments({major:"CSE"}) to count conditionally.

// 7) Group students by enrolled status.
db.students.aggregate([
  {
    $group : {
    	_id: "$enrolled",
      totalStudents: {$sum:1}
  	}
  }
]);
// ✓ CORRECT: Grouping by $enrolled creates two groups: true (enrolled) and false (not enrolled).
// Shows how many students fall into each category.

// 8) Find all students who live in Toronto.
db.students.find({"address.city":"Toronto"}).pretty();
// ✓ CORRECT: Dot notation queries nested object fields. Field path must be quoted as a string.



// ================================================================
// ADDITIONAL PRACTICE
// ================================================================
// Try these additional challenges on your own:
//
// A) Find students with age >= 22, return only name and age
//
// B) Add a "gpa" field with value 3.5 to all students in "Database Systems"
//
// C) Count how many students have "SQL" in their skills
//
// D) Group by course and calculate average age per course
//
// E) Sort students by age descending and limit to top 3
