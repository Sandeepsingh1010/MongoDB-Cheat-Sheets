# Schema Design

## 📌 Concept
Schema design in MongoDB is about balancing read performance, write patterns, document size, and data consistency.
Main pattern choices:
- Embed related, frequently read-together data.
- Reference data when relationships are large, shared, or updated independently.

## 🧾 Syntax
Embedded model:

```json
{
  "_id": 1,
  "name": "Alice",
  "orders": [
    { "orderId": 101, "item": "Laptop", "price": 1200 }
  ]
}
```

Referenced model:

```json
{
  "_id": 1,
  "name": "Alice",
  "orderIds": [101, 102]
}
```

Built-in schema validation:

```js
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "createdAt"],
      properties: {
        email: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
})
```

Custom document builder function:

```js
function buildUserDoc(input) {
  if (!input?.email) throw new Error("email is required")
  return {
    email: input.email.toLowerCase(),
    name: input.name ?? null,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}
```

## ✅ Example
```js
const user = buildUserDoc({ email: "USER@MAIL.COM", name: "Rita" })
db.users.insertOne(user)
```

## ⚠️ Common Mistakes
- Embedding unbounded arrays that can grow indefinitely.
- Storing duplicated data without a strategy to keep it consistent.
- Skipping validation for critical collections.

## 💡 Tips
- Design schema from access patterns first, not from relational table habits.
- Add timestamps and status fields as a baseline convention.
- Revisit schema decisions as query patterns evolve.
