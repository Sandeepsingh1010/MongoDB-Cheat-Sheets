# Common Error Patterns

## 📌 Concept
This file centralizes high-frequency errors from class exercises and practice labs.
It focuses on failures caused by syntax, deprecated commands, and destructive operations.

## 🧾 Syntax
Examples that raise errors or warnings:

```js
// Deprecated method warning
db.devices.insert({ _id: "FX200A", Cloud_blueprint_id: 105689 })

// Duplicate key error
db.food.insertOne({ _id: 1, fruit: ["Apple"] })
db.food.insertOne({ _id: 1, fruit: ["Banana"] })
```

Safer modern alternatives:

```js
db.devices.insertOne({ _id: "FX200A", Cloud_blueprint_id: 105689 })

function assertNonEmptyFilter(filter) {
  if (!filter || Object.keys(filter).length === 0) {
    throw new Error("Refusing operation with empty filter")
  }
}
```

## ✅ Example
```js
const filter = { archived: true }
assertNonEmptyFilter(filter)
db.users.deleteMany(filter)
```

## ⚠️ Common Mistakes
- Using deprecated APIs in current MongoDB versions.
- Reusing `_id` values in inserts.
- Running destructive operations without checking active DB and filter.

## 💡 Tips
- Modernize older class snippets before reuse.
- Add small safety helper functions in shell scripts.
- Verify active database with `db.getName()` before drop/delete commands.
