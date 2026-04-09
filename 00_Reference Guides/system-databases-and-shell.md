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

---

## ACID Properties (Traditional Databases)

### 📌 Concept
ACID guarantees consistency and reliability in traditional relational databases:

| Property | Definition | Example |
|----------|-----------|----------|
| **Atomicity** | All operations in a transaction succeed or all rollback | Transfer $100: debit account A AND credit account B (both or neither) |
| **Consistency** | Database remains in valid state after transaction | All constraints maintained (foreign keys, unique values) |
| **Isolation** | Transactions don't interfere with each other | Transaction 1 doesn't see Transaction 2's uncommitted changes |
| **Durability** | Completed transactions persist even after failures | After commit, data survives server crash |

---

## BASE Properties (NoSQL / MongoDB)

### 📌 Concept
BASE is the counterpoint to ACID, optimized for distributed, high-availability systems:

| Property | Definition | Trade-off |
|----------|-----------|----------|
| **Basic Availability** | System always responds to requests (even if some nodes fail) | May return stale data |
| **Soft State** | System state may change over time, even without input | Eventual consistency replaces immediate consistency |
| **Eventual Consistency** | System will reach consistent state, but not immediately | Temporary inconsistencies accepted for availability |

### 🧾 Example
```js
// MongoDB write acknowledgment levels (BASE in action)
db.users.insertOne({ name: "John" }) 
// Immediate acknowledgment, written to memory
// Will eventually be durably written to disk

// Read from primary vs replica (eventual consistency)
// Read from primary: latest data, possible slight lag
// Read from replica: may be slightly stale, but highly available
```

### 💡 Tips
- MongoDB supports multi-document ACID transactions (newer versions).
- For most applications, eventual consistency is acceptable and provides better scalability.
- Use write concern options (`w: 1`, `w: "majority"`) to control durability guarantees.
