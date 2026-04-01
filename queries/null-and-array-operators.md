# Null And Array Operators

## 📌 Concept
Null checks and array operators need special care because null and missing fields behave differently.
This topic also covers matching array content and array length.

## 🧾 Syntax
Null handling:

```js
db.c.find({ y: null })
db.c.find({ y: { $in: [null], $exists: true } })
```

Array operators:

```js
db.food.find({ fruit: { $all: ["Apple", "Banana"] } })
db.food.find({ fruit: { $size: 3 } })
```

## ✅ Example
```js
db.food.insertMany([
  { _id: 1, fruit: ["Apple", "Banana", "Orange"] },
  { _id: 2, fruit: ["Apple", "Banana"] },
  { _id: 3, fruit: ["Strawberry", "Blueberry", "Cherry"] }
])

db.food.find({ fruit: { $all: ["Apple", "Banana"] } })
```

## ⚠️ Common Mistakes
- Assuming `{ field: null }` matches only explicit null values.
- Using `$size` with range operators directly.
- Expecting `$all` to work on non-array fields.

## 💡 Tips
- Use `$exists: true` with null checks when needed.
- Model array fields consistently (array of strings vs array of objects).
- Keep array cardinality expectations documented in schema notes.
