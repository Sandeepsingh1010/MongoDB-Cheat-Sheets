# Projection Logical And Comparison Queries

## 📌 Concept
This note groups projection rules with logical and comparison query operators.
It is the core querying toolkit for SQL-style filtering in MongoDB.

## 🧾 Syntax
Projection:

```js
db.student.find({}, { fname: 1, lname: 1 })
db.student.find({}, { fname: 1, lname: 1, _id: 0 })
```

Logical/comparison operators:

```js
db.student.find({ $and: [{ _id: 30 }, { age: 19 }] })
db.student.find({ $or: [{ _id: 30 }, { age: 20 }] })

db.student.find({ age: { $lt: 20 } })
db.student.find({ age: { $lte: 20 } })
db.student.find({ age: { $gt: 20 } })
db.student.find({ age: { $gte: 20 } })
db.student.find({ age: { $ne: 21 } })
```

## ✅ Example
```js
db.student.find({
  $and: [{ age: { $lt: 21 } }, { _id: { $gt: 20 } }]
})
```

## ⚠️ Common Mistakes
- Forgetting to prefix operators with `$`.
- Mixing JavaScript operators with MongoDB query syntax.
- Forgetting `_id` inclusion behavior in projection.

## 💡 Tips
- Use `$and` and `$or` explicitly for teaching clarity.
- Keep projection minimal to return only required fields.
- Test each predicate separately before combining conditions.
