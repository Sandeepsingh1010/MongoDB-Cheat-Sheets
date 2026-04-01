# Aggregation

## 📌 Concept
Aggregation processes documents through pipeline stages.
It is used for analytics, reporting, transformation, and server-side computations.

Built-in aggregation capabilities include:
- Stages: `$match`, `$group`, `$project`, `$sort`, `$lookup`, `$unwind`, `$facet`
- Accumulators: `$sum`, `$avg`, `$min`, `$max`, `$push`, `$addToSet`

Custom logic can be introduced with `$function` in supported environments.

## 🧾 Syntax
Basic pipeline shape:

```js
db.collection.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$category", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])
```

Custom function in pipeline:

```js
{
  $addFields: {
    normalizedName: {
      $function: {
        body: function (name) {
          return name ? name.trim().toLowerCase() : null
        },
        args: ["$name"],
        lang: "js"
      }
    }
  }
}
```

## ✅ Example
```js
db.students.aggregate([
  { $match: { marks: { $gte: 40 } } },
  {
    $group: {
      _id: "$course",
      avgMarks: { $avg: "$marks" },
      totalStudents: { $sum: 1 }
    }
  },
  { $sort: { avgMarks: -1 } },
  { $project: { _id: 0, course: "$_id", avgMarks: 1, totalStudents: 1 } }
])
```

## ⚠️ Common Mistakes
- Placing `$match` too late, causing unnecessary processing.
- Using `$project` and accidentally removing fields needed by later stages.
- Overusing `$function` for logic already available via native operators.

## 💡 Tips
- Prefer built-in operators first because they are usually faster and clearer.
- Keep pipelines modular: filter early, shape late.
- Use `explain("executionStats")` on large pipelines to inspect performance.
