
## � Comprehensive Reference — All Commands, Functions & Operators

Quick lookup table of everything covered organized by category. Arranged in **ASCENDING ORDER**.

**Legend:** Each entry shows the section number where it's first covered. (e.g., 1.3 = Section 1.3 in 01_Foundations)

---

### CRUD Commands (Database Operations)

| Command | Description | Section |
|---------|-------------|---------|
| `countDocuments({filter})` | Count matching documents | 5.1 |
| `deleteMany({filter})` | Delete multiple documents | 4.10 |
| `deleteOne({filter})` | Delete one document | 4.9 |
| `find({filter}, {projection})` | Query documents with optional projection | 1.4, 2.1-2.6 |
| `findOne({filter})` | Find one document | 2.9 |
| `insertMany([{...}, {...}])` | Insert multiple documents | 1.6 |
| `insertOne({...})` | Insert one document | 1.3 |
| `updateMany({filter}, {update})` | Update multiple documents | 4.7 |
| `updateOne({filter}, {update})` | Update one document | 4.1 |

---

### Cursor Methods (Chainable on find results)

| Method | Description | Section |
|--------|-------------|---------|
| `.limit(n)` | Limit number of documents returned | 2.8 |
| `.pretty()` | Format output for readability | 1.5 |
| `.sort({field: 1/-1})` | Sort results (1=asc, -1=desc) | 2.7 |

---

### Aggregation Pipeline Stages

| Stage | Description | Section |
|-------|-------------|---------|
| `aggregate()` | Start aggregation pipeline | 6.1 |
| `{ $concat: [...] }` | Concatenate strings | 6.6 (BONUS) |
| `{ $group: {...} }` | Group documents by expression | 6.1-6.2 |
| `{ $limit: n }` | Limit pipeline output | 6.4 |
| `{ $match: {...} }` | Filter documents in pipeline | 6.1, 6.3 |
| `{ $project: {...} }` | Select/reshape fields | 6.1 |
| `{ $sort: {...} }` | Sort documents in pipeline | 6.4 |
| `{ $unwind: "$field" }` | Decompose array fields | 6.5 (BONUS) |

---

### Aggregation Accumulators (Used inside `$group`)

| Accumulator | Description | Section |
|-------------|-------------|---------|
| `{ $addToSet: "$field" }` | Add to set (no duplicates) | 4.6, 6.2 |
| `{ $avg: "$field" }` | Calculate average | 6.2 |
| `{ $max: "$field" }` | Find maximum value | 6.2 |
| `{ $min: "$field" }` | Find minimum value | 6.2 |
| `{ $push: "$field" }` | Add to array | 4.6, 6.2 |
| `{ $sum: 1 }` | Count documents | 6.1, 6.2 |
| `{ $sum: "$field" }` | Sum field values | 6.1, 6.2 |

---

### Update Operators (Used in `updateOne`/`updateMany`)

| Operator | Description | Section |
|----------|-------------|---------|
| `{ $addToSet: { field: value } }` | Add to array (unique values only) | 4.6 |
| `{ $inc: { field: number } }` | Increment field by number | 4.3 |
| `{ $push: { field: value } }` | Add to array | 4.6 |
| `{ $rename: { old: "new" } }` | Rename field | 4.8 |
| `{ $set: { field: value } }` | Set field value | 4.1, 4.4 |
| `{ $unset: { field: 1 } }` | Remove field | 4.5 |

---

### Query Operators — Comparison (Used in find filters)

| Operator | Description | Section |
|----------|-------------|---------|
| `{ field: { $eq: value } }` | Equal to | 2.2 |
| `{ field: { $gt: value } }` | Greater than | 2.2 |
| `{ field: { $gte: value } }` | Greater than or equal | 2.3 |
| `{ field: { $in: [...] } }` | In array of values | 2.5 |
| `{ field: { $lt: value } }` | Less than | 2.3 |
| `{ field: { $lte: value } }` | Less than or equal | 2.3 |
| `{ field: { $ne: value } }` | Not equal | 2.3 |
| `{ field: { $nin: [...] } }` | Not in array | 2.5 |

---

### Query Operators — Logical (Used in find filters)

| Operator | Description | Section |
|----------|-------------|---------|
| `{ $and: [cond1, cond2] }` | AND logic | 2.3 |
| `{ $or: [cond1, cond2] }` | OR logic | 2.4 |

---

### Query Operators — Array (Used in find filters)

| Operator | Description | Section |
|----------|-------------|---------|
| `{ field: "value" }` | Array contains value | 3.2 |

---

### String Operators (Aggregation `$project` stage)

| Operator | Description | Section |
|----------|-------------|---------|
| `{ $concat: [...] }` | Concatenate multiple strings | 6.6 (BONUS) |
| `{ $toLower: "$field" }` | Convert to lowercase | 6.6 (BONUS) |
| `{ $toString: "$field" }` | Convert value to string | 6.6 (BONUS) |
| `{ $toUpper: "$field" }` | Convert to uppercase | 6.6 (BONUS) |
| `{ $trim: { input: "$field" } }` | Remove whitespace | 6.6 (BONUS) |

---

### Index Methods (Index management)

| Method | Description | Section |
|--------|-------------|---------|
| `createIndex({ field: 1 })` | Create index on field | 7.1 |
| `dropIndex("index_name")` | Drop specific index | 7.1 |
| `dropIndexes()` | Drop all indexes (keeps _id) | 7.1 |
| `getIndexes()` | List all indexes | 7.2 |

---

### Database Methods

| Method | Description | Section |
|--------|-------------|---------|
| `db.dropDatabase()` | Drop current database | Foundation |
| `db.getName()` | Get current database name | Foundation |
| `use("database_name")` | Select database | 1.1 |

---



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
