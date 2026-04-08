// playground.mongodb.js
// ================================================================
// MONGODB FOUNDATIONS PLAYGROUND
// ================================================================
// Topics: Database selection, Collections, Basic inserts
//
// How to use:
// 1) Open this file in VS Code with the MongoDB extension.
// 2) Connect to your MongoDB server / cluster.
// 3) Run ONE SECTION AT A TIME.
// 4) Read comments before each command.
// 5) Observe output after every operation.
// ================================================================

// ================================================================
// SECTION 1 — SELECT A DATABASE
// ================================================================
// This switches your current database context.
// If the database does not exist yet, MongoDB will create it once you
// insert data into a collection inside it.
use("mongo_course_playground");



// ================================================================
// OPTIONAL RESET SECTION — START CLEAN
// ================================================================
// Uncomment the next line ONLY if you want to remove the entire
// database and start over from scratch.
//
// db.dropDatabase();



// ================================================================
// SECTION 2 — UNDERSTANDING COLLECTIONS
// ================================================================
// In SQL, you usually create a table first.
// In MongoDB, collections are often created automatically when you
// insert the first document.
//
// Let's inspect what collections exist right now.
// If this is your first time, you may see none.
db.getCollectionNames();



// ================================================================
// SECTION 3 — INSERT ONE DOCUMENT
// ================================================================
// A document is like a row in SQL, but more flexible.
// This inserts one student document into the "students" collection.
//
// Notice:
// - name is a string
// - age is a number
// - major is a string
// - enrolled is a boolean
// - skills is an array
// - address is a nested object
db.students.insertOne({
  name: "Ali",
  age: 21,
  major: "Computer Science",
  enrolled: true,
  skills: ["SQL", "Java"],
  address: {
    city: "Toronto",
    country: "Canada"
  }
});



// ================================================================
// SECTION 4 — VIEW DOCUMENTS
// ================================================================
// find() returns all documents in the collection.
// Similar idea to:
// SELECT * FROM students;
db.students.find({});



// ================================================================
// SECTION 5 — PRETTY OUTPUT
// ================================================================
// pretty() formats the output to make it easier to read.
db.students.find({}).pretty();



// ================================================================
// SECTION 6 — INSERT MANY DOCUMENTS
// ================================================================
// This adds multiple documents at once.
// Similar idea to inserting multiple rows in SQL.
db.students.insertMany([
  {
    name: "Sara",
    age: 22,
    major: "Mathematics",
    enrolled: true,
    skills: ["Python", "Statistics"],
    address: { city: "Ottawa", country: "Canada" }
  },
  {
    name: "John",
    age: 19,
    major: "Physics",
    enrolled: false,
    skills: ["C++"],
    address: { city: "Vancouver", country: "Canada" }
  },
  {
    name: "Mina",
    age: 24,
    major: "Database Systems",
    enrolled: true,
    skills: ["SQL", "MongoDB", "PL/SQL"],
    address: { city: "Montreal", country: "Canada" }
  },
  {
    name: "Omar",
    age: 20,
    major: "Computer Science",
    enrolled: true,
    skills: ["JavaScript", "Node.js"],
    address: { city: "Toronto", country: "Canada" }
  }
]);



// ================================================================
// SECTION 7 — VERIFY THE DATA
// ================================================================
db.students.find({}).pretty();
