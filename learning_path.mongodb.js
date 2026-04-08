// playground.mongodb.js
// ================================================================
// MONGODB LEARNING PLAYGROUND
// ================================================================
// How to use this file:
// 1) Open this file in VS Code with the MongoDB extension installed.
// 2) Connect to your MongoDB server / cluster.
// 3) Run ONE SECTION AT A TIME.
// 4) Read the comments before each command.
// 5) Observe the output after every command.
//
// Important learning note:
// - MongoDB stores data in DATABASES.
// - Databases contain COLLECTIONS.
// - Collections contain DOCUMENTS.
// - Documents are JSON-like objects (technically BSON in MongoDB).
//
// Suggested workflow:
// - Start at Section 0.
// - Run one command at a time.
// - After inserts / updates / deletes, run a find() command to inspect data.
// - Re-run sections only if you understand what each one is doing.
//
// If you want a clean restart later:
// - Run the DROP section near the top.
// ================================================================



// ================================================================
// SECTION 0 — SELECT A DATABASE
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
// SECTION 1 — UNDERSTANDING COLLECTIONS
// ================================================================
// In SQL, you usually create a table first.
// In MongoDB, collections are often created automatically when you
// insert the first document.
//
// Let's inspect what collections exist right now.
// If this is your first time, you may see none.
db.getCollectionNames();



// ================================================================
// SECTION 2 — INSERT ONE DOCUMENT
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
// SECTION 3 — VIEW DOCUMENTS
// ================================================================
// find() returns all documents in the collection.
// Similar idea to:
// SELECT * FROM students;
db.students.find({});



// ================================================================
// SECTION 4 — PRETTY OUTPUT
// ================================================================
// pretty() formats the output to make it easier to read.
db.students.find({}).pretty();



// ================================================================
// SECTION 5 — INSERT MANY DOCUMENTS
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
// SECTION 6 — VERIFY THE DATA
// ================================================================
db.students.find({}).pretty();



// ================================================================
// SECTION 7 — BASIC FILTERING
// ================================================================
// In MongoDB, find({ condition }) is like SQL WHERE.
//
// Example:
// SELECT * FROM students WHERE major = 'Computer Science';
db.students.find({ major: "Computer Science" }).pretty();



// ================================================================
// SECTION 8 — FILTER BY NUMBER COMPARISON
// ================================================================
// MongoDB operators:
// - $gt  = greater than
// - $gte = greater than or equal
// - $lt  = less than
// - $lte = less than or equal
//
// Example:
// SELECT * FROM students WHERE age > 20;
db.students.find({ age: { $gt: 20 } }).pretty();



// ================================================================
// SECTION 9 — FILTER WITH MULTIPLE CONDITIONS
// ================================================================
// This is like:
// SELECT * FROM students
// WHERE major = 'Computer Science' AND enrolled = true;
db.students.find({
  major: "Computer Science",
  enrolled: true
}).pretty();



// ================================================================
// SECTION 10 — USING OR
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
// SECTION 11 — PROJECT ONLY CERTAIN FIELDS
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
// SECTION 12 — EXCLUDE _id
// ================================================================
// This is useful because MongoDB includes _id automatically.
db.students.find(
  {},
  { _id: 0, name: 1, major: 1 }
).pretty();



// ================================================================
// SECTION 13 — SORT RESULTS
// ================================================================
// sort({ age: 1 })  => ascending
// sort({ age: -1 }) => descending
//
// Similar to:
// SELECT * FROM students ORDER BY age ASC;
db.students.find({}).sort({ age: 1 }).pretty();



// ================================================================
// SECTION 14 — LIMIT RESULTS
// ================================================================
// Similar to limiting the number of rows returned.
db.students.find({}).sort({ age: 1 }).limit(3).pretty();



// ================================================================
// SECTION 15 — FIND ONE DOCUMENT
// ================================================================
// findOne() returns a single matching document.
db.students.findOne({ name: "Ali" });



// ================================================================
// SECTION 16 — QUERY INSIDE NESTED OBJECTS
// ================================================================
// Dot notation lets you query nested fields.
//
// Example:
// SELECT * FROM students WHERE address.city = 'Toronto';
db.students.find({ "address.city": "Toronto" }).pretty();



// ================================================================
// SECTION 17 — QUERY ARRAYS
// ================================================================
// This finds documents where the skills array contains "SQL".
db.students.find({ skills: "SQL" }).pretty();



// ================================================================
// SECTION 18 — UPDATE ONE DOCUMENT
// ================================================================
// In MongoDB, updates use operators like:
// - $set    : assign / replace field values
// - $inc    : increase a number
// - $unset  : remove a field
// - $push   : add one item to an array
//
// Example:
// change Ali's age to 22
db.students.updateOne(
  { name: "Ali" },
  { $set: { age: 22 } }
);



// ================================================================
// SECTION 19 — VERIFY THE UPDATE
// ================================================================
db.students.find({ name: "Ali" }).pretty();



// ================================================================
// SECTION 20 — INCREMENT A VALUE
// ================================================================
// Increase Sara's age by 1.
// Useful for counters, quantities, scores, etc.
db.students.updateOne(
  { name: "Sara" },
  { $inc: { age: 1 } }
);

db.students.find({ name: "Sara" }).pretty();



// ================================================================
// SECTION 21 — ADD A FIELD TO AN EXISTING DOCUMENT
// ================================================================
// MongoDB schema is flexible.
// Documents in the same collection do not all need the same fields.
db.students.updateOne(
  { name: "John" },
  { $set: { gpa: 3.4 } }
);

db.students.find({ name: "John" }).pretty();



// ================================================================
// SECTION 22 — REMOVE A FIELD
// ================================================================
// $unset removes a field from a document.
db.students.updateOne(
  { name: "John" },
  { $unset: { gpa: "" } }
);

db.students.find({ name: "John" }).pretty();



// ================================================================
// SECTION 23 — PUSH INTO AN ARRAY
// ================================================================
// Add a new skill to Mina's skills array.
db.students.updateOne(
  { name: "Mina" },
  { $push: { skills: "Aggregation" } }
);

db.students.find({ name: "Mina" }).pretty();



// ================================================================
// SECTION 24 — UPDATE MANY DOCUMENTS
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
// SECTION 25 — DELETE ONE DOCUMENT
// ================================================================
// This deletes the first matching document.
//
// Be careful with delete operations.
db.students.deleteOne({ name: "Omar" });

db.students.find({}).pretty();



// ================================================================
// SECTION 26 — DELETE MANY DOCUMENTS
// ================================================================
// This deletes all students who are not enrolled.
db.students.deleteMany({ enrolled: false });

db.students.find({}).pretty();



// ================================================================
// SECTION 27 — COUNT DOCUMENTS
// ================================================================
// Similar to:
// SELECT COUNT(*) FROM students;
db.students.countDocuments({});



// ================================================================
// SECTION 28 — COUNT WITH A CONDITION
// ================================================================
db.students.countDocuments({ major: "Computer Science" });



// ================================================================
// SECTION 29 — CREATE ANOTHER COLLECTION FOR RELATION-LIKE THINKING
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
// SECTION 30 — EMBEDDING RELATED DATA
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
// SECTION 31 — QUERY INSIDE EMBEDDED ARRAY OF OBJECTS
// ================================================================
// Find students taking COMP214.
db.students.find({
  "courses.code": "COMP214"
}).pretty();



// ================================================================
// SECTION 32 — INTRO TO AGGREGATION
// ================================================================
// Aggregation is like SQL GROUP BY + calculations + transformations.
//
// This pipeline groups students by major
// and counts how many students are in each major.
//
// Stages:
// - $group: group documents
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
// SECTION 33 — AGGREGATION WITH AVERAGE
// ================================================================
// Calculate average age by major.
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
// SECTION 34 — MATCH + GROUP
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
// SECTION 35 — SORT AGGREGATION RESULTS
// ================================================================
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
// SECTION 36 — CREATE AN INDEX
// ================================================================
// Indexes improve query performance.
//
// Similar idea to SQL indexes.
// Here we create an index on major.
db.students.createIndex({ major: 1 });



// ================================================================
// SECTION 37 — VIEW INDEXES
// ================================================================
db.students.getIndexes();



// ================================================================
// SECTION 38 — SEE ALL DOCUMENTS AT THE END
// ================================================================
db.students.find({}).pretty();
db.courses.find({}).pretty();



// ================================================================
// SECTION 39 — PRACTICE CHALLENGES
// ================================================================
// Try these yourself before looking up answers:
//
// 1) Insert a new student named "Lina" aged 23 in Mathematics.
// 2) Find all students older than 21.
// 3) Return only name and age, without _id.
// 4) Add "MongoDB" to Ali's skills.
// 5) Delete all students in Mathematics.
// 6) Count how many students are left.
// 7) Group students by enrolled status.
// 8) Find all students who live in Toronto.
//
// You can write your answers below this line.