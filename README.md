# MongoDB Learning Guide & Cheat Sheet 📘

**Learn MongoDB step-by-step, then use as a cheat sheet forever.**

---

## 🚀 Getting Started in 5 Minutes

This repository teaches MongoDB through **executable playgrounds** organized in a progressive learning path.

### How to Use This Repo:

1. **For Learning:** Follow sections in order
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
📂 **File:** [01_Foundations/01_Foundations.mongodb.js](01_Foundations/01_Foundations.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **1.1** | Select a database | `use db_name` |
| **1.2** | Understand collections | Collections are like "tables" |
| **1.3** | Insert one document | `insertOne({...})` |
| **1.4** | View documents | `find()` returns all docs |
| **1.5** | Pretty output | `.pretty()` formats results |
| **1.6** | Insert many documents | `insertMany([{...}, {...}])` |
| **1.7** | Verify the data | Check what was inserted |

✨ **What You Learn:** How to create data and connect to MongoDB

---

### Phase 2: Querying & Filtering (20 mins)
📂 **File:** [02_Queries/02_Queries.mongodb.js](02_Queries/02_Queries.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **2.1** | Basic filtering | `find({field: value})` |
| **2.2** | Number comparison | `{age: {$gt: 21}}` |
| **2.3** | Multiple conditions | `{age: {$gt: 20}, status: "active"}` |
| **2.4** | Using OR | `{$or: [condition1, condition2]}` |
| **2.5** | Project fields | `find({}, {field: 1})` |
| **2.6** | Exclude fields | `{field: 0}` or exclude `_id` |
| **2.7** | Sort results | `.sort({field: 1})` (1=asc, -1=desc) |
| **2.8** | Limit results | `.limit(5)` returns first 5 docs |
| **2.9** | Find one | `findOne({...})` or `.limit(1)` |

✨ **What You Learn:** How to search for data with WHERE-like clauses

---

### Phase 3: Nested Data (5 mins)
📂 **File:** [03_Nested Data/03_Nested Data.mongodb.js](03_Nested Data/03_Nested Data.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **3.1** | Query nested objects | `{"user.name": "John"}` (dot notation) |
| **3.2** | Query arrays | `{tags: "mongodb"}` matches array containing value |

✨ **What You Learn:** How to work with complex nested structures

---

### Phase 4: CREATE, UPDATE, DELETE (25 mins)
📂 **File:** [04_Crud/04_Crud.mongodb.js](04_Crud/04_Crud.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **4.1** | Update one doc | `updateOne({filter}, {$set: {field: value}})` |
| **4.2** | Verify update | Run `find()` to check the update |
| **4.3** | Increment | `{$inc: {count: 1}}` adds to a number |
| **4.4** | Add field | `{$set: {newField: value}}` on existing doc |
| **4.5** | Remove field | `{$unset: {field: 1}}` deletes a field |
| **4.6** | Push to array | `{$push: {array: value}}` adds to array |
| **4.7** | Update many | `updateMany()` updates multiple docs |
| **4.8** | Rename fields | `{$rename: {oldName: newName}}` |
| **4.9** | Delete one | `deleteOne({filter})` |
| **4.10** | Delete many | `deleteMany({filter})` |

✨ **What You Learn:** How to modify and remove data

---

### Phase 5: Collections & Relationships (10 mins)
📂 **File:** [05_Collections/05_Collections.mongodb.js](05_Collections/05_Collections.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **5.1** | Count documents | `countDocuments()` returns total |
| **5.2** | Count with filter | `countDocuments({filter})` counts matching |
| **5.3** | Multiple collections | Create 2nd collection for related data |
| **5.4** | Embedding data | Store related data inside documents |
| **5.5** | Query embedded arrays | Search inside array of objects |

✨ **What You Learn:** How to organize data across collections or embed related data

---

### Phase 6: Aggregation (15 mins)
📂 **File:** [06_Aggregation/06_Aggregation.mongodb.js](06_Aggregation/06_Aggregation.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **6.1** | Intro to aggregation | `aggregate([{$match: {...}}, {$group: {...}}])` |
| **6.2** | Group & Average | `{$group: {_id: "$field", avg: {$avg: "$score"}}}` |
| **6.3** | Match + Group | Combine filter with aggregation |
| **6.4** | Sort results | `{$sort: {field: 1}}` in pipeline |
| **6.5** | Unwind arrays | `{$unwind: "$arrayField"}` - decompose arrays |
| **6.6** | Concatinate | `{ $concat: ["string1", "$field1", "string2", "$field2"] }` - Concatenate Strings |

✨ **What You Learn:** How to perform analytics, transformations, and decompose nested arrays

---

### Phase 7: Indexing (5 mins)
📂 **File:** [07_Indexing/07_Indexing.mongodb.js](07_Indexing/07_Indexing.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **7.1** | Create index | `createIndex({field: 1})` speeds up queries |
| **7.2** | View indexes | `getIndexes()` shows all indexes |

✨ **What You Learn:** How to optimize query performance

---

### Phase 8: Practice (15 mins)
📂 **File:** [practice-challenges-playground.mongodb.js](practice-challenges-playground.mongodb.js)

| Section | Concept | Syntax |
|---------|---------|--------|
| **40** | Practice challenges | 8+ problems to test all concepts |

✨ **What You Learn:** Solidify all 39 concepts in one place

---

## 📚 Detailed Reference Guides

For deeper explanations and advanced topics:

| Topic | File | Purpose |
|-------|------|---------|
| **Schema Design** | [00_Reference Guides/schema-design.md](00_Reference Guides/schema-design.md) | Embed vs. reference patterns |
| **Projection & Queries** | [00_Reference Guides/projection-logical-and-comparison.md](00_Reference Guides/projection-logical-and-comparison.md) | Full operator reference |
| **Array & Null** | [00_Reference Guides/null-and-array-operators.md](00_Reference Guides/null-and-array-operators.md) | Array query patterns |
| **Range & Membership** | [00_Reference Guides/membership-mod-and-range.md](00_Reference Guides/membership-mod-and-range.md) | Advanced filtering |
| **CREATE & READ** | [00_Reference Guides/create-and-read.md](00_Reference Guides/create-and-read.md) | INSERT/READ detailed guide |
| **UPDATE & DELETE** | [00_Reference Guides/update-delete-and-upsert.md](00_Reference Guides/update-delete-and-upsert.md) | UPDATE/DELETE detailed guide |
| **Aggregation** | [00_Reference Guides/aggregation.md](00_Reference Guides/aggregation.md) | Pipeline stages & accumulators |
| **Indexing** | [00_Reference Guides/indexing.md](00_Reference Guides/indexing.md) | Index strategies & performance |
| **Shell Basics** | [00_Reference Guides/system-databases-and-shell.md](00_Reference Guides/system-databases-and-shell.md) | Shell advanced features |
| **Functions** | [00_Reference Guides/mongosh-built-in-vs-custom-functions.md](00_Reference Guides/mongosh-built-in-vs-custom-functions.md) | Shell functions |
| **Error Patterns** | [00_Reference Guides/common-error-patterns.md](00_Reference Guides/common-error-patterns.md) | Common mistakes & solutions |

---

## 📂 Repository Structure

```
MongoDB-Cheat-Sheets/
├── README.md (this file - START HERE!)
├── PLAYGROUND-INDEX.mongodb.js (quick reference)
├── practice-challenges-playground.mongodb.js
│
├── 01_Foundations/
│   ├── 01_Foundations.mongodb.js (SECTIONS 1.1-1.7)
│   ├── system-databases-and-shell.md
│   └── mongosh-built-in-vs-custom-functions.md
│
├── 02_Queries/
│   ├── 02_Queries.mongodb.js (SECTIONS 2.1-2.9)
│   ├── projection-logical-and-comparison.md
│   ├── membership-mod-and-range.md
│   └── null-and-array-operators.md
│
├── 03_Nested Data/
│   └── 03_Nested Data.mongodb.js (SECTIONS 3.1-3.2)
│
├── 04_Crud/
│   ├── 04_Crud.mongodb.js (SECTIONS 4.1-4.10)
│   ├── create-and-read.md
│   └── update-delete-and-upsert.md
│
├── 05_Collections/
│   └── 05_Collections.mongodb.js (SECTIONS 5.1-5.5)
│
├── 06_Aggregation/
│   ├── 06_Aggregation.mongodb.js (SECTIONS 6.1-6.6)
│   └── aggregation.md
│
├── 07_Indexing/
│   ├── 07_Indexing.mongodb.js (SECTIONS 7.1-7.2)
│   └── indexing.md
│
├── 00_Reference Guides/
│   ├── schema-design.md (data modeling patterns)
│   ├── system-databases-and-shell.md (shell advanced features)
│   ├── mongosh-built-in-vs-custom-functions.md (shell functions)
│   ├── projection-logical-and-comparison.md (full operator reference)
│   ├── membership-mod-and-range.md (advanced filtering)
│   ├── null-and-array-operators.md (array query patterns)
│   ├── create-and-read.md (INSERT/READ detailed guide)
│   ├── update-delete-and-upsert.md (UPDATE/DELETE detailed guide)
│   ├── aggregation.md (pipeline stages & accumulators)
│   ├── indexing.md (index strategies & performance)
│   └── common-error-patterns.md (common mistakes & solutions)
```

---

## 💡 Tips for Learning Success

### **While Learning **
- ✅ Start with [01_Foundations/01_Foundations.mongodb.js](01_Foundations/01_Foundations.mongodb.js)
- ✅ Run ONE section at a time and observe the output
- ✅ Modify the code (change values, try new operators) to experiment
- ✅ Read the markdown reference files alongside the playgrounds
- ✅ Take time to understand each concept before moving forward
- ✅ Complete [practice-challenges-playground.mongodb.js](practice-challenges-playground.mongodb.js) after all sections
- ✅ Reset test data by re-running earlier sections if needed

### **While Using as a Cheat Sheet**
- 🔍 Quick lookup by topic using [Quick References.md](Quick References.md)
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

📄 *See [00_Reference Guides/common-error-patterns.md](00_Reference Guides/common-error-patterns.md) for detailed patterns*

---

## 🎯 Next Steps

| Your Goal | Start Here |
|-----------|-----------|
| **I'm new to MongoDB** | Phase 1: (foundations/database-and-collections-playground.mongodb.js) |
| **I need syntax quickly** | Jump to **Quick Cheat Sheet** section above |
| **I want to practice** | Go to [Practice-chalenges](practice-challenges-playground.mongodb.js) |
| **I'm stuck on an error** | Check [00_Reference Guides/common-error-patterns.md](00_Reference Guides/common-error-patterns.md) |

---

**Happy Learning! 🚀**

Execute each section progressively, practice with modifications, and reference this guide whenever you need MongoDB syntax in the future.
