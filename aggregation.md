# Aggregation

## Example
```js
db.students.aggregate([
  {
    $group: {
      _id: "$course",
      avgMarks: { $avg: "$marks" }
    }
  }
])
```

## Common Stages
- $match
- $group
- $sort
- $project
