# Mongosh Built-In Vs Custom Functions

## 📌 Concept
MongoDB shell supports JavaScript expressions and custom functions.
Use built-in database functions for core operations, and custom functions for repeatable workflows.

## 🧾 Syntax
Built-in shell/database functions:

```js
db.stats()
db.users.countDocuments({ active: true })
db.users.find({ age: { $gte: 18 } }).limit(5)
```

Custom functions:

```js
function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

function getCollectionStats(name) {
  if (!name) throw new Error("Collection name is required")
  return db.getCollection(name).stats()
}
```

## ✅ Example
```js
"Hello World!".replace("World!", "MongoDB!")
factorial(5)
getCollectionStats("student")
```

## ⚠️ Common Mistakes
- Writing custom helpers without input validation.
- Re-implementing logic that already exists in built-in operators.
- Keeping large custom business logic in shell scripts.

## 💡 Tips
- Keep shell helpers small and focused.
- Prefer built-in operators for performance and readability.
- Store shared helpers in a script file and version-control them.
