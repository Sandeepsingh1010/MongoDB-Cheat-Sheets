// playground.mongodb.js
// ================================================================
// MONGODB INDEXING PLAYGROUND
// ================================================================
// Topics: Index creation, viewing indexes, performance optimization
//
// Prerequisites: Run foundations/database-and-collections-playground.mongodb.js first
// ================================================================

use("mongo_course_playground");



// ================================================================
// SECTION 7.1 — CREATE AN INDEX
// ================================================================
// Indexes improve query performance.
//
// Similar idea to SQL indexes.
// Here we create an index on major.
db.students.createIndex({ major: 1 });



// ================================================================
// SECTION 7.2 — VIEW INDEXES
// ================================================================
db.students.getIndexes();
