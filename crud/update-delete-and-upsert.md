# CRUD Update Delete And Upsert

## 📌 Concept
Update and delete operations modify existing data and can be destructive if filters are too broad.
Upsert combines update and insert behavior in one operation.

## 🧾 Syntax
```js
db.users.updateOne({ email: "a@x.com" }, { $set: { active: true } })
db.users.updateMany({ active: false }, { $set: { archived: true } })

db.users.deleteOne({ email: "a@x.com" })
db.users.deleteMany({ _id: { $in: [20, 30, 40] } })

db.users.updateOne(
  { email: "a@x.com" },
  { $set: { name: "Ana" }, $setOnInsert: { createdAt: new Date() } },
  { upsert: true }
)
```

## ✅ Example
```js
function upsertUserByEmail(email, payload) {
  if (!email) throw new Error("email is required")
  return db.users.updateOne(
    { email },
    { $set: payload, $setOnInsert: { createdAt: new Date() } },
    { upsert: true }
  )
}

upsertUserByEmail("john@site.com", { active: false, updatedAt: new Date() })
```

## ⚠️ Common Mistakes
- Running updates/deletes with `{}` unintentionally.
- Replacing a whole document by forgetting `$set`.
- Expecting repeated keys in one filter object to work as multiple conditions.

## 💡 Tips
- Validate filters before bulk updates/deletes.
- Use `findOneAndUpdate` when you need the updated document back.
- Add indexes on frequent update/delete filter fields.
