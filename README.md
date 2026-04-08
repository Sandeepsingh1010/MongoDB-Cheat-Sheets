# MongoDB Learning Guide & Cheat Sheet 📘

**Learn MongoDB step-by-step, then use as a cheat sheet forever.**

---

## 🚀 Getting Started in 5 Minutes

This repository teaches MongoDB through **executable playgrounds** organized in a progressive learning path.

### How to Use This Repo:

1. **For Learning:** Follow sections 1-40 in order (takes ~2-3 hours total)
   - Open `.mongodb.js` files in VS Code
   - Install the [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode) extension
   - Connect to a MongoDB instance
   - Run one section at a time

2. **For Reference:** Skip to any topic you need later using the **Quick Cheat Sheet** sections below
   - Each playground file is independent (except those that depend on early sections)
   - Syntax examples show common patterns
   - Quick lookup by topic saves time when you return later

---

## 📚 Progressive Learning Path (40 Sections)

**Total Time: ~2-3 hours** | Run each section and modify the code to practice

### Phase 1: Foundations (10 mins)
📂 **File:** [foundations/database-and-collections-playground.mongodb.js](foundations/database-and-collections-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **1** | Select a database | `use db_name` |
| **2** | Understand collections | Collections are like "tables" |
| **3** | Insert one document | `insertOne({...})` |
| **4** | View documents | `find()` returns all docs |
| **5** | Pretty output | `.pretty()` formats results |
| **6** | Insert many documents | `insertMany([{...}, {...}])` |
| **7** | Verify the data | Check what was inserted |

✨ **What You Learn:** How to create data and connect to MongoDB

---

### Phase 2: Querying & Filtering (20 mins)
📂 **File:** [queries/query-and-projection-playground.mongodb.js](queries/query-and-projection-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **8** | Basic filtering | `find({field: value})` |
| **9** | Number comparison | `{age: {$gt: 21}}` |
| **10** | Multiple conditions | `{age: {$gt: 20}, status: "active"}` |
| **11** | Using OR | `{$or: [condition1, condition2]}` |
| **12** | Project fields | `find({}, {field: 1})` |
| **13** | Exclude fields | `{field: 0}` or exclude `_id` |
| **14** | Sort results | `.sort({field: 1})` (1=asc, -1=desc) |
| **15** | Limit results | `.limit(5)` returns first 5 docs |
| **16** | Find one | `findOne({...})` or `.limit(1)` |

✨ **What You Learn:** How to search for data with WHERE-like clauses

---

### Phase 3: Nested Data (5 mins)
📂 **File:** [queries/nested-and-arrays-playground.mongodb.js](queries/nested-and-arrays-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **17** | Query nested objects | `{"user.name": "John"}` (dot notation) |
| **18** | Query arrays | `{tags: "mongodb"}` matches array containing value |

✨ **What You Learn:** How to work with complex nested structures

---

### Phase 4: CREATE, UPDATE, DELETE (25 mins)
📂 **File:** [crud/update-delete-and-upsert-playground.mongodb.js](crud/update-delete-and-upsert-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **19** | Update one doc | `updateOne({filter}, {$set: {field: value}})` |
| **20** | Verify update | Run `find()` to check the update |
| **21** | Increment | `{$inc: {count: 1}}` adds to a number |
| **22** | Add field | `{$set: {newField: value}}` on existing doc |
| **23** | Remove field | `{$unset: {field: 1}}` deletes a field |
| **24** | Push to array | `{$push: {array: value}}` adds to array |
| **25** | Update many | `updateMany()` updates multiple docs |
| **26** | Rename fields | `{$rename: {oldName: newName}}` |
| **27** | Delete one | `deleteOne({filter})` |
| **28** | Delete many | `deleteMany({filter})` |

✨ **What You Learn:** How to modify and remove data

---

### Phase 5: Collections & Relationships (10 mins)
📂 **File:** [crud/collections-and-embedding-playground.mongodb.js](crud/collections-and-embedding-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **29** | Count documents | `countDocuments()` returns total |
| **30** | Count with filter | `countDocuments({filter})` counts matching |
| **31** | Multiple collections | Create 2nd collection for related data |
| **32** | Embedding data | Store related data inside documents |
| **33** | Query embedded arrays | Search inside array of objects |

✨ **What You Learn:** How to organize data across collections or embed related data

---

### Phase 6: Aggregation (15 mins)
📂 **File:** [aggregation/aggregation-playground.mongodb.js](aggregation/aggregation-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **34** | Intro to aggregation | `aggregate([{$match: {...}}, {$group: {...}}])` |
| **35** | Group & Average | `{$group: {_id: "$field", avg: {$avg: "$score"}}}` |
| **36** | Match + Group | Combine filter with aggregation |
| **37** | Sort results | `{$sort: {field: 1}}` in pipeline |

✨ **What You Learn:** How to perform analytics and transformations

---

### Phase 7: Indexing (5 mins)
📂 **File:** [indexing/indexing-playground.mongodb.js](indexing/indexing-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **38** | Create index | `createIndex({field: 1})` speeds up queries |
| **39** | View indexes | `getIndexes()` shows all indexes |

✨ **What You Learn:** How to optimize query performance

---

### Phase 8: Practice (15 mins)
📂 **File:** [practice-challenges-playground.mongodb.js](practice-challenges-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **40** | Practice challenges | 8+ problems to test all concepts |

✨ **What You Learn:** Solidify all 39 concepts in one place

---

## 📖 Quick Cheat Sheet Reference

Use this section when you need to remember syntax for a specific task. Bookmark this!

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
📄 *See [SECTIONS 3, 6](foundations/database-and-collections-playground.mongodb.js) | [crud/create-and-read.md](crud/create-and-read.md)*

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
📄 *See [SECTIONS 4, 8-16](queries/query-and-projection-playground.mongodb.js) | [queries/projection-logical-and-comparison.md](queries/projection-logical-and-comparison.md)*

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
{ $push: { tags: "new" } }           // Add to array
{ $rename: { old: "new" } }          // Rename field
```
📄 *See [SECTIONS 19-26](crud/update-delete-and-upsert-playground.mongodb.js) | [crud/update-delete-and-upsert.md](crud/update-delete-and-upsert.md)*

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
📄 *See [SECTIONS 27-28](crud/update-delete-and-upsert-playground.mongodb.js) | [crud/update-delete-and-upsert.md](crud/update-delete-and-upsert.md)*

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
📄 *See [SECTIONS 8-18](queries/query-and-projection-playground.mongodb.js) | [queries/projection-logical-and-comparison.md](queries/projection-logical-and-comparison.md)*

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
📄 *See [SECTIONS 34-37](aggregation/aggregation-playground.mongodb.js) | [aggregation/aggregation.md](aggregation/aggregation.md)*

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
📄 *See [SECTIONS 38-39](indexing/indexing-playground.mongodb.js) | [indexing/indexing.md](indexing/indexing.md)*

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
📄 *See [SECTIONS 29-33](crud/collections-and-embedding-playground.mongodb.js) | [schema-design.md](schema-design.md)*

---

## 📚 Detailed Reference Guides

For deeper explanations and advanced topics:

| Topic | File | Purpose |
|-------|------|---------|
| **Schema Design** | [schema-design.md](schema-design.md) | Embed vs. reference patterns |
| **Projection & Queries** | [queries/projection-logical-and-comparison.md](queries/projection-logical-and-comparison.md) | Full operator reference |
| **Array & Null** | [queries/null-and-array-operators.md](queries/null-and-array-operators.md) | Array query patterns |
| **Range & Membership** | [queries/membership-mod-and-range.md](queries/membership-mod-and-range.md) | Advanced filtering |
| **CREATE & READ** | [crud/create-and-read.md](crud/create-and-read.md) | INSERT/READ detailed guide |
| **UPDATE & DELETE** | [crud/update-delete-and-upsert.md](crud/update-delete-and-upsert.md) | UPDATE/DELETE detailed guide |
| **Aggregation** | [aggregation/aggregation.md](aggregation/aggregation.md) | Pipeline stages & accumulators |
| **Indexing** | [indexing/indexing.md](indexing/indexing.md) | Index strategies & performance |
| **Shell Basics** | [foundations/system-databases-and-shell.md](foundations/system-databases-and-shell.md) | Shell advanced features |
| **Functions** | [foundations/mongosh-built-in-vs-custom-functions.md](foundations/mongosh-built-in-vs-custom-functions.md) | Shell functions |
| **Error Patterns** | [troubleshooting/common-error-patterns.md](troubleshooting/common-error-patterns.md) | Common mistakes & solutions |

---

## 📂 Repository Structure

```
MongoDB-Cheat-Sheets/
├── README.md (this file - START HERE!)
├── PLAYGROUND-INDEX.mongodb.js (quick reference)
├── schema-design.md (data modeling patterns)
├── practice-challenges-playground.mongodb.js (SECTION 40)
│
├── foundations/
│   ├── system-databases-and-shell.md
│   ├── mongosh-built-in-vs-custom-functions.md
│   └── database-and-collections-playground.mongodb.js (SECTIONS 1-7)
│
├── queries/
│   ├── projection-logical-and-comparison.md
│   ├── membership-mod-and-range.md
│   ├── null-and-array-operators.md
│   ├── query-and-projection-playground.mongodb.js (SECTIONS 8-16)
│   └── nested-and-arrays-playground.mongodb.js (SECTIONS 17-18)
│
├── crud/
│   ├── create-and-read.md
│   ├── update-delete-and-upsert.md
│   ├── create-and-read-playground.mongodb.js (reference)
│   ├── update-delete-and-upsert-playground.mongodb.js (SECTIONS 19-28)
│   └── collections-and-embedding-playground.mongodb.js (SECTIONS 29-33)
│
├── aggregation/
│   ├── aggregation.md
│   └── aggregation-playground.mongodb.js (SECTIONS 34-37)
│
├── indexing/
│   ├── indexing.md
│   └── indexing-playground.mongodb.js (SECTIONS 38-39)
│
└── troubleshooting/
    └── common-error-patterns.md
```

---

## 💡 Tips for Learning Success

### **While Learning (Sections 1-40)**
- ✅ Start with [foundations/database-and-collections-playground.mongodb.js](foundations/database-and-collections-playground.mongodb.js)
- ✅ Run ONE section at a time and observe the output
- ✅ Modify the code (change values, try new operators) to experiment
- ✅ Read the markdown reference files alongside the playgrounds
- ✅ Take time to understand each concept before moving forward
- ✅ Complete [practice-challenges-playground.mongodb.js](practice-challenges-playground.mongodb.js) after all sections
- ✅ Reset test data by re-running earlier sections if needed

### **While Using as a Cheat Sheet (Future)**
- 🔍 Quick lookup by topic using the **Cheat Sheet** sections above
- 🔗 Click file links to jump directly to relevant playground code
- 📄 Reference markdown files for deeper explanations
- ⚡ Use `findOne()` instead of `find()` for testing single documents
- 💬 Look at examples with SQL comments to understand MongoDB syntax
- 📌 Bookmark this README for quick access

---

## ⚠️ Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Create duplicate `_id` values | Let MongoDB auto-generate `_id` unless you need custom keys |
| Forget `_id` in projection | Use `_id: 0` to exclude it from results |
| Use old `insert()` method | Use `insertOne()` / `insertMany()` instead |
| Run destructive operations blindly | Always check `db.getName()` before delete/drop |
| Create too many indexes | Index only fields you query/sort by frequently |
| Forget `$` in operator names | Use `$gt`, `$set`, `$push` (not `gt`, `set`, `push`) |
| Mix JavaScript with MongoDB | Remember: `$exists`, `$type`, `$regex` are MongoDB syntax, not JS |
| Query without index on large queries | Use `.explain("executionStats")` to check performance |

📄 *See [troubleshooting/common-error-patterns.md](troubleshooting/common-error-patterns.md) for detailed patterns*

---

## 🎯 Next Steps

| Your Goal | Start Here |
|-----------|-----------|
| **I'm new to MongoDB** | Phase 1: [SECTION 1-7](foundations/database-and-collections-playground.mongodb.js) |
| **I need syntax quickly** | Jump to **Quick Cheat Sheet** section above |
| **I want to practice** | Go to [SECTION 40](practice-challenges-playground.mongodb.js) |
| **I need to optimize queries** | Read [indexing/indexing.md](indexing/indexing.md) + [SECTIONS 38-39](indexing/indexing-playground.mongodb.js) |
| **I'm stuck on an error** | Check [troubleshooting/common-error-patterns.md](troubleshooting/common-error-patterns.md) |

---

**Happy Learning! 🚀**

Execute each section progressively, practice with modifications, and reference this guide whenever you need MongoDB syntax in the future.
