# CRUD Operations

## Insert
```js
db.users.insertOne({ name: "John", age: 30 })
```

## Find
```js
db.users.find({ age: 30 })
```

## Update
```js
db.users.updateOne(
  { name: "John" },
  { $set: { age: 31 } }
)
```

## Delete
```js
db.users.deleteOne({ name: "John" })
```
