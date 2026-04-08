// playground.mongodb.js
// ================================================================
// MONGODB COLLECTIONS & EMBEDDING PLAYGROUND
// ================================================================
// Topics: Multiple collections, embedding patterns, querying embedded data
//
// Prerequisites: Run foundations/database-and-collections-playground.mongodb.js first
// ================================================================

use("mongo_course_playground");



// ================================================================
// SECTION 29 — COUNT DOCUMENTS
// ================================================================
// Similar to:
// SELECT COUNT(*) FROM students;
db.students.countDocuments({});



// ================================================================
// SECTION 30 — COUNT WITH A CONDITION
// ================================================================
db.students.countDocuments({ major: "Computer Science" });



// ================================================================
// SECTION 31 — CREATE ANOTHER COLLECTION FOR RELATION-LIKE THINKING
// ================================================================
// MongoDB is not relational in the same way as SQL,
// but you can still model related data.
//
// Here we create a "courses" collection.
db.courses.insertMany([
  {
    code: "COMP214",
    title: "Advanced Database",
    department: "Computer Science",
    credits: 3
  },
  {
    code: "MATH201",
    title: "Linear Algebra",
    department: "Mathematics",
    credits: 3
  },
  {
    code: "COMP301",
    title: "Web Development",
    department: "Computer Science",
    credits: 4
  }
]);

db.courses.find({}).pretty();



// ================================================================
// SECTION 32 — EMBEDDING RELATED DATA
// ================================================================
// One common MongoDB pattern is EMBEDDING related data
// inside a document instead of splitting everything into tables.
//
// Here we store enrolled courses directly inside a student document.
db.students.updateOne(
  { name: "Ali" },
  {
    $set: {
      courses: [
        { code: "COMP214", semester: "Winter 2026" },
        { code: "COMP301", semester: "Winter 2026" }
      ]
    }
  }
);

db.students.find({ name: "Ali" }).pretty();



// ================================================================
// SECTION 33 — QUERY INSIDE EMBEDDED ARRAY OF OBJECTS
// ================================================================
// Find students taking COMP214.
db.students.find({
  "courses.code": "COMP214"
}).pretty();
