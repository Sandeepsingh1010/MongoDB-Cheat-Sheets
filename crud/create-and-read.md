# CRUD Create And Read

## 📌 Concept
Create and read operations are the first step of data lifecycle management in MongoDB.
Create uses `insertOne`/`insertMany`; read uses `find`/`findOne` with optional projection.

## 🧾 Syntax
```js
db.student.insertOne({ _id: 10, fname: "Jane", lname: "Ken", age: 21 })
db.student.insertMany([{ _id: 20, fname: "Laura" }, { _id: 30, lname: "Alex" }])

db.student.find()
db.student.find({ _id: 30 }, { fname: 1, lname: 1, _id: 0 })
```

## ✅ Example
```js
const st = [
  { _id: 40, fname: "Kamal", lname: "Kenneth", age: 20 },
  { _id: 50, fname: "Anne", lname: "Daniel", age: 21 }
]

db.student.insertMany(st)
db.student.find({}, { fname: 1, lname: 1, _id: 0 })
```

## ⚠️ Common Mistakes
- Inserting duplicate `_id` values.
- Forgetting that `_id` appears in projection unless `_id: 0` is set.
- Using deprecated `insert()` in new examples.

## 💡 Tips
- Let MongoDB auto-generate `_id` unless you need custom keys.
- Use projection to reduce payload size.
- Keep test data sets small while learning query behavior.
