# System Databases And Shell Basics

## 📌 Concept
This note covers foundational MongoDB shell operations and default system databases discussed in Week 11.
System databases exist for administration, cluster metadata, and local instance data.

## 🧾 Syntax
```js
show dbs
use mynewdb
db.getName()
show collections
db.dropDatabase()
```

```text
admin  -> users, roles, administrative commands
config -> sharding and cluster metadata
local  -> instance-local data, not shared across separate servers
```

## ✅ Example
```js
show dbs
use mynewdb
db.getName()

db.student.insertOne({ _id: 10, fname: "Laura", lname: "James" })
db.student.find()
```

## ⚠️ Common Mistakes
- Running `db.dropDatabase()` without confirming the active database.
- Assuming `local` is normal application data storage.
- Confusing a collection name with a database name.

## 💡 Tips
- Run `db.getName()` before destructive commands.
- Keep admin actions under properly scoped admin users.
- Use this file as the shell command starter reference.
