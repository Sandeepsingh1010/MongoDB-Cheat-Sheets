# Indexing

## 📌 Concept
Indexes are built-in data structures that speed up query reads by avoiding full collection scans.
They improve lookup/sort performance but add write overhead and storage cost.

## 🧾 Syntax
Create common indexes:

```js
db.users.createIndex({ name: 1 })
db.users.createIndex({ email: 1 }, { unique: true })
db.orders.createIndex({ userId: 1, createdAt: -1 })
db.articles.createIndex({ title: "text", body: "text" })
```

Inspect and manage indexes:

```js
db.users.getIndexes()
db.users.dropIndex("name_1")
db.users.dropIndexes()
```

Custom helper function to ensure index exists:

```js
function ensureUserIndexes() {
	db.users.createIndex({ email: 1 }, { unique: true })
	db.users.createIndex({ active: 1, createdAt: -1 })
}
```

## ✅ Example
```js
db.users.createIndex({ active: 1, lastLogin: -1 })

db.users.find({ active: true })
	.sort({ lastLogin: -1 })
	.limit(20)
	.explain("executionStats")
```

## ⚠️ Common Mistakes
- Creating too many indexes on write-heavy collections.
- Building a compound index in the wrong field order for query patterns.
- Forgetting that regex patterns without prefix often cannot use indexes effectively.

## 💡 Tips
- Index fields used in filter + sort together when possible.
- Prefer one well-designed compound index over many overlapping indexes.
- Review `getIndexes()` regularly and remove unused ones.
