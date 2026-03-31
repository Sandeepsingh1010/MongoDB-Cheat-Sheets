# Query Operators

## Comparison
- $gt, $lt, $gte, $lte

```js
db.users.find({ age: { $gt: 25 } })
```

## Logical
- $and, $or

```js
db.users.find({
  $or: [{ age: 20 }, { age: 30 }]
})
```
