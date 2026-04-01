# Membership Mod And Range Queries

## 📌 Concept
Membership and numeric operators are useful for set-based and arithmetic filtering.
These operators are common in dashboards and reports.

## 🧾 Syntax
```js
db.student.find({ age: { $in: [19, 20] } })
db.student.find({ age: { $nin: [19, 20] } })
db.student.find({ age: { $mod: [2, 0] } })
```

Combined with logical conditions:

```js
db.student.find({ $or: [{ age: { $in: [19, 20] } }, { _id: 10 }] })
```

## ✅ Example
```js
db.student.find({
  $or: [{ age: { $lt: 21 } }, { _id: { $gt: 20 } }]
})
```

## ⚠️ Common Mistakes
- Using string values where numbers are expected.
- Misreading `$nin` as “not in document” instead of “value not in set”.
- Applying `$mod` to non-numeric fields.

## 💡 Tips
- Confirm field types before using arithmetic operators.
- Prefer `$in` over long chains of equality checks.
- Combine membership with indexes for better performance.
