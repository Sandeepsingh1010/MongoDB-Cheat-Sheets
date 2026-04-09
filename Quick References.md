
## 📖 Quick Cheat Sheet Reference

Use this section when you need to remember syntax for a specific task. Bookmark this!


// ================================================================
// 📋 COMPREHENSIVE REFERENCE — ALL COMMANDS, FUNCTIONS & OPERATORS
// ================================================================
// Quick lookup table of everything covered organized by category
// Arranged in ASCENDING ORDER
//
// Legend: 
//   - Sections refer to the file location (e.g., 1.3 = 01_Foundations section 1.3)
//   - Commands are actions you run directly
//   - Methods are called on cursors or collections
//   - Operators are used inside filters, updates, or pipelines
//   - Accumulators are used inside $group stage
//
// ================================================================
// CRUD COMMANDS (Database Operations)
// ================================================================
countDocuments({filter})          // Section 5.1 - Count matching documents
deleteMany({filter})              // Section 4.10 - Delete multiple documents
deleteOne({filter})               // Section 4.9 - Delete one document
find({filter}, {projection})      // Sections 1.4, 2.1-2.6 - Query documents
findOne({filter})                 // Section 2.9 - Find one document
insertMany([{...}, {...}])        // Section 1.6 - Insert multiple documents
insertOne({...})                  // Section 1.3 - Insert one document
updateMany({filter}, {update})    // Section 4.7 - Update multiple documents
updateOne({filter}, {update})     // Section 4.1 - Update one document
//
// ================================================================
// CURSOR METHODS (Chainable on find results)
// ================================================================
.limit(n)                         // Section 2.8 - Limit number of documents
.pretty()                         // Section 1.5 - Format output for readability
.sort({field: 1 or -1})          // Section 2.7 - Sort results (1=asc, -1=desc)
//
// ================================================================
// AGGREGATION PIPELINE STAGES
// ================================================================
aggregate()                       // Section 6.1 - Start aggregation pipeline
{ $concat: [...] }                // Section 6.6 (BONUS) - Concatenate strings
{ $group: {...} }                 // Sections 6.1-6.2 - Group documents
{ $limit: n }                     // Section 6.4 - Limit pipeline output
{ $match: {...} }                 // Sections 6.1, 6.3 - Filter in pipeline
{ $project: {...} }               // Section 6.1 - Select/reshape fields
{ $sort: {...} }                  // Section 6.4 - Sort in pipeline
{ $unwind: "$field" }             // Section 6.5 (BONUS) - Decompose arrays
//
// ================================================================
// AGGREGATION ACCUMULATORS (Used inside $group)
// ================================================================
{ $addToSet: "$field" }           // Sections 4.6, 6.2 - Add to set (no duplicates)
{ $avg: "$field" }                // Section 6.2 - Calculate average
{ $max: "$field" }                // Section 6.2 - Find maximum value
{ $min: "$field" }                // Section 6.2 - Find minimum value
{ $push: "$field" }               // Sections 4.6, 6.2 - Add to array
{ $sum: 1 }                       // Sections 6.1, 6.2 - Count documents
{ $sum: "$field" }                // Sections 6.1, 6.2 - Sum field values
//
// ================================================================
// UPDATE OPERATORS (Used in updateOne/updateMany)
// ================================================================
{ $addToSet: { field: value } }   // Section 4.6 - Add to array (unique)
{ $inc: { field: number } }       // Section 4.3 - Increment field
{ $push: { field: value } }       // Section 4.6 - Add to array
{ $rename: { old: "new" } }       // Section 4.8 - Rename field
{ $set: { field: value } }        // Sections 4.1, 4.4 - Set field value
{ $unset: { field: 1 } }          // Section 4.5 - Remove field
//
// ================================================================
// QUERY OPERATORS — COMPARISON (Used in find filters)
// ================================================================
{ field: { $eq: value } }         // Section 2.2 - Equal to
{ field: { $gt: value } }         // Section 2.2 - Greater than
{ field: { $gte: value } }        // Section 2.3 - Greater than or equal
{ field: { $in: [...] } }         // Section 2.5 - In array of values
{ field: { $lt: value } }         // Section 2.3 - Less than
{ field: { $lte: value } }        // Section 2.3 - Less than or equal
{ field: { $ne: value } }         // Section 2.3 - Not equal
{ field: { $nin: [...] } }        // Section 2.5 - Not in array
//
// ================================================================
// QUERY OPERATORS — LOGICAL (Used in find filters)
// ================================================================
{ $and: [cond1, cond2] }          // Section 2.3 - AND logic
{ $or: [cond1, cond2] }           // Section 2.4 - OR logic
//
// ================================================================
// QUERY OPERATORS — ARRAY (Used in find filters)
// ================================================================
{ field: "value" }                // Section 3.2 - Array contains value
//
// ================================================================
// STRING OPERATORS (Aggregation $project stage)
// ================================================================
{ $concat: [...] }                // Section 6.6 (BONUS) - Concatenate
{ $toLower: "$field" }            // Section 6.6 (BONUS) - Convert to lowercase
{ $toString: "$field" }           // Section 6.6 (BONUS) - Convert to string
{ $toUpper: "$field" }            // Section 6.6 (BONUS) - Convert to uppercase
{ $trim: { input: "$field" } }    // Section 6.6 (BONUS) - Remove whitespace
//
// ================================================================
// INDEX METHODS (Index management)
// ================================================================
createIndex({ field: 1 })         // Section 7.1 - Create index
dropIndex("index_name")           // Section 7.1 - Drop specific index
dropIndexes()                     // Section 7.1 - Drop all indexes
getIndexes()                      // Section 7.2 - List all indexes
//
// ================================================================
// DATABASE METHODS
// ================================================================
use("database_name")              // Section 1.1 - Select database
db.getName()                      // Foundation - Get current database name
db.dropDatabase()                 // Foundation - Drop current database


### **INSERT Data**
```js
// Single document
db.users.insertOne({ name: "John", age: 30 })

// Multiple documents
db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 }
])
```
📄 *See [SECTIONS 1.3, 1.6](01_Foundations/01_Foundations.mongodb.js) | [00_Reference Guides/create-and-read.md](00_Reference Guides/create-and-read.md)*

---

### **FIND & READ Data**
```js
// All documents
db.users.find()

// Filter documents
db.users.find({ age: { $gt: 25 } })

// With projection (select certain fields)
db.users.find({}, { name: 1, age: 1, _id: 0 })

// One document
db.users.findOne({ _id: 1 })

// Sort and limit
db.users.find().sort({ age: 1 }).limit(5)
```
📄 *See [SECTIONS 1.4, 2.1-2.9](02_Queries/02_Queries.mongodb.js) | [00_Reference Guides/projection-logical-and-comparison.md](00_Reference Guides/projection-logical-and-comparison.md)*

---

### **UPDATE Data**
```js
// Single document
db.users.updateOne(
  { _id: 1 },
  { $set: { age: 31 } }
)

// Multiple documents
db.users.updateMany(
  { status: "inactive" },
  { $set: { active: false } }
)

// Common update operators
{ $set: { field: value } }           // Set field value
{ $inc: { count: 1 } }               // Increment by 1
{ $unset: { field: 1 } }             // Remove field
{ $push: { tags: "new" } }           // Add to array (allows duplicates)
{ $addToSet: { tags: "new" } }       // Add to array (no duplicates)
{ $rename: { old: "new" } }          // Rename field
```
📄 *See [SECTIONS 4.1-4.8](04_Crud/04_Crud.mongodb.js) | [00_Reference Guides/update-delete-and-upsert.md](00_Reference Guides/update-delete-and-upsert.md)*

---

### **DELETE Data**
```js
// Single document
db.users.deleteOne({ _id: 1 })

// Multiple documents
db.users.deleteMany({ status: "inactive" })

// ⚠️ Delete all (dangerous!)
db.users.deleteMany({})
```
📄 *See [SECTIONS 4.9-4.10](04_Crud/04_Crud.mongodb.js) | [00_Reference Guides/update-delete-and-upsert.md](00_Reference Guides/update-delete-and-upsert.md)*

---

### **SQL vs MongoDB (CRUD Translation)**

| Operation | SQL | MongoDB | Notes |
|-----------|-----|---------|-------|
| **Insert** | `INSERT INTO users VALUES (...)` | `db.users.insertOne({...})` | Single row vs single document |
| **Read** | `SELECT * FROM users WHERE age > 25` | `db.users.find({ age: { $gt: 25 } })` | WHERE becomes filter object |
| **Update** | `UPDATE users SET age = 31 WHERE id = 1` | `db.users.updateOne({ _id: 1 }, { $set: { age: 31 } })` | Requires `$set` operator |
| **Delete** | `DELETE FROM users WHERE id = 1` | `db.users.deleteOne({ _id: 1 })` | Filter syntax is similar |
| **Multiple** | `INSERT INTO users VALUES (), (), ()` | `db.users.insertMany([{...}, {...}])` | Batch operations more efficient |
| **Many Updates** | `UPDATE users SET active = 0 WHERE status = "inactive"` | `db.users.updateMany({ status: "inactive" }, { $set: { active: false } })` | `updateMany` for bulk operations |

---

### **QUERY Operators (Filtering)**
```js
// Comparison operators
{ age: { $gt: 25 } }         // Greater than
{ age: { $gte: 25 } }        // Greater than or equal
{ age: { $lt: 25 } }         // Less than
{ age: { $lte: 25 } }        // Less than or equal
{ age: { $ne: 25 } }         // Not equal
{ age: { $in: [25, 30] } }   // In array of values
{ age: { $nin: [25, 30] } }  // Not in array

// Logical operators
{ $and: [{ age: { $gt: 25 } }, { status: "active" }] }
{ $or: [{ age: { $gt: 30 } }, { vip: true }] }
{ $nor: [{ status: "banned" }, { deleted: true }] }

// Array operators
{ tags: "mongodb" }                           // Contains value
{ skills: { $size: 3 } }                      // Array has exactly 3 items
{ items: { $elemMatch: { status: "sold" } } } // Any item matches

// Nested objects (dot notation)
{ "address.city": "NYC" }
{ "user.age": { $gt: 20 } }
```
📄 *See [SECTIONS 2.1-3.2](02_Queries/02_Queries.mongodb.js) | [00_Reference Guides/projection-logical-and-comparison.md](00_Reference Guides/projection-logical-and-comparison.md)*

---

### **AGGREGATION Pipeline**
```js
db.orders.aggregate([
  // Stage 1: Filter
  { $match: { status: "completed" } },
  
  // Stage 2: Group and accumulate
  { $group: {
      _id: "$customer",
      total: { $sum: "$amount" },
      count: { $sum: 1 },
      avgAmount: { $avg: "$amount" }
  } },
  
  // Stage 3: Sort
  { $sort: { total: -1 } },
  
  // Stage 4: Limit
  { $limit: 10 }
])

// Common accumulators
$sum: 1           // Count documents
$sum: "$amount"   // Sum a field
$avg: "$amount"   // Average
$min: "$amount"   // Minimum
$max: "$amount"   // Maximum
$push: "$item"    // Collect into array
$first: "$name"   // Get first value
$last: "$name"    // Get last value
```
📄 *See [SECTIONS 6.1-6.4](06_Aggregation/06_Aggregation.mongodb.js) | [00_Reference Guides/aggregation.md](00_Reference Guides/aggregation.md)*

---

### **UNWIND Arrays (Decompose)**
```js
// Flatten array field into separate documents
db.restaurants.aggregate([
  { $unwind: "$reviews" },           // Each review becomes separate document
  { $group: { _id: "$name", count: { $sum: 1 } } }  // Count reviews per restaurant
])

// Preserve documents with empty/missing arrays
db.restaurants.aggregate([
  { $unwind: { path: "$reviews", preserveNullAndEmptyArrays: true } },
  { $group: { _id: "$name", totalReviews: { $sum: 1 } } }
])

// Example: Before unwind
// { _id: 1, name: "Emily", comments: [{ author: "Bob" }, { author: "Rob" }] }
// After unwind (2 documents)
// { _id: 1, name: "Emily", comments: { author: "Bob" } }
// { _id: 1, name: "Emily", comments: { author: "Rob" } }
```
📄 *See [00_Reference Guides/aggregation.md](00_Reference Guides/aggregation.md)*

---

### **CREATE & MANAGE INDEXES**
```js
// Create single-field index
db.users.createIndex({ email: 1 })

// Create compound index (multiple fields)
db.orders.createIndex({ userId: 1, createdAt: -1 })

// Unique index (prevent duplicates)
db.users.createIndex({ email: 1 }, { unique: true })

// Text index (full-text search)
db.articles.createIndex({ title: "text", body: "text" })

// View all indexes
db.users.getIndexes()

// Drop specific index
db.users.dropIndex("email_1")

// Drop all indexes (keeps _id index)
db.users.dropIndexes()
```
📄 *See [SECTIONS 7.1-7.2](07_Indexing/07_Indexing.mongodb.js) | [00_Reference Guides/indexing.md](00_Reference Guides/indexing.md)*

---

### **SCHEMA DESIGN PATTERNS**
```js
// Embedded model (store related data together)
{
  _id: 1,
  name: "Alice",
  address: {
    street: "123 Main",
    city: "NYC",
    zip: "10001"
  },
  orders: [
    { id: 1, item: "Laptop", price: 1200 },
    { id: 2, item: "Mouse", price: 25 }
  ]
}

// Referenced model (separate collections)
// Users collection:
{ _id: 1, name: "Alice", orderIds: [101, 102] }

// Orders collection:
{ _id: 101, userId: 1, item: "Laptop", price: 1200 }

// Schema validation with JSON Schema
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email"],
      properties: {
        email: { bsonType: "string" },
        age: { bsonType: "int" },
        tags: { bsonType: "array" }
      }
    }
  }
})
```
📄 *See [SECTIONS 5.1-5.5](05_Collections/05_Collections.mongodb.js) | [00_Reference Guides/schema-design.md](00_Reference Guides/schema-design.md)*
