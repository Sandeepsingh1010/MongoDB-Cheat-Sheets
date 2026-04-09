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

---

## `$addToSet` vs `$push` for Arrays

### 📌 Concept
Both operators add values to arrays, but:
- **`$push`**: Adds value unconditionally (allows duplicates)
- **`$addToSet`**: Adds value only if it doesn't already exist (avoids duplicates)

### 🧾 Syntax
```js
// $push - allows duplicates
db.comments.updateOne(
  { _id: 1 },
  { $push: { tags: "mongodb" } }
)

// $addToSet - prevents duplicates
db.comments.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "mongodb" } }
)

// $push with $each - add multiple values at once
db.comments.updateOne(
  { _id: 1 },
  { $push: { tags: { $each: ["mongodb", "database", "nosql"] } } }
)
```

### ✅ Example
```js
// First addition (both work the same)
db.blog.updateOne({ _id: 1 }, { $addToSet: { comments: "Nice blog" } })
// Result: { comments: ["Nice blog"] }

// Second addition with same value
db.blog.updateOne({ _id: 1 }, { $addToSet: { comments: "Nice blog" } })
// Result: { comments: ["Nice blog"] } - NO DUPLICATE

// With $push, the same operation would create a duplicate
db.blog.updateOne({ _id: 1 }, { $push: { comments: "Nice blog" } })
// Result: { comments: ["Nice blog", "Nice blog"] } - DUPLICATE ADDED
```

### ⚠️ Common Mistakes
- Using `$push` when you need uniqueness; use `$addToSet` instead.
- Forgetting that `$addToSet` with objects requires the entire object to match (shallow comparison).
- Not knowing which operator was used; check your update results to verify behavior.

### 💡 Tips
- Use `$addToSet` for tags, categories, or any list where duplicates don't make sense.
- Use `$push` for ordered lists (like comments) where duplicates may be intentional.
- Combine with `$each` to add multiple values efficiently in one operation.
