# Aggregation

## 📌 Concept
Aggregation processes documents through pipeline stages.
It is used for analytics, reporting, transformation, and server-side computations.

Built-in aggregation capabilities include:
- Stages: `$match`, `$group`, `$project`, `$sort`, `$lookup`, `$unwind`, `$facet`
- Accumulators: `$sum`, `$avg`, `$min`, `$max`, `$push`, `$addToSet`
- String Operators: `$concat`, `$substr`, `$toLower`, `$toUpper`, `$trim`

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

---

## `$unwind` - Decompose Array Fields

### 📌 Concept
`$unwind` deconstructs an array field within documents to output multiple documents:
- **One document with array** → **Multiple documents, one value per array element**
- Essential for analyzing nested array data (reviews, comments, tags, etc.)
- Each array element becomes a separate document in the pipeline

### 🧾 Syntax
```js
// Basic unwind
db.collection.aggregate([
  { $unwind: "$arrayField" }
])

// Unwind with configuration (preserve empty arrays)
db.collection.aggregate([
  { 
    $unwind: { 
      path: "$arrayField",
      preserveNullAndEmptyArrays: true
    }
  }
])
```

### ✅ Example

**Before (One document with array):**
```js
{
  _id: 1,
  name: "Emily",
  comments: [
    { author: "Bob", text: "Nice!" },
    { author: "Rob", text: "Great!" }
  ]
}
```

**After `$unwind`:**
```js
// Document 1
{
  _id: 1,
  name: "Emily",
  comments: { author: "Bob", text: "Nice!" }
}

// Document 2
{
  _id: 1,
  name: "Emily",
  comments: { author: "Rob", text: "Great!" }
}
```

### 🧾 Practical Pipeline Examples

**Count reviews per restaurant:**
```js
db.restaurants.aggregate([
  { $unwind: "$reviews" },
  { $group: { _id: "$name", count: { $sum: 1 } } }
])
// Result: Each restaurant with total review count
```

**Average rating per restaurant:**
```js
db.restaurants.aggregate([
  { $unwind: "$reviews" },
  { $group: { 
      _id: "$name", 
      avgRating: { $avg: "$reviews.rating" } 
  } },
  { $sort: { avgRating: -1 } }
])
// Result: Top-rated restaurants first
```

**Group by reviewer name:**
```js
db.restaurants.aggregate([
  { $unwind: "$reviews" },
  { $group: { _id: "$reviews.name", count: { $sum: 1 } } }
])
// Result: Most active reviewers
```

### ⚠️ Common Mistakes
- Forgetting that `$unwind` **duplicates** the parent document for each array element (increases output size).
- Not using `preserveNullAndEmptyArrays` when you need documents with empty/missing arrays.
- Using `$unwind` early in pipeline without filtering; can cause unnecessary processing.

### 💡 Tips
- Use `$unwind` early to flatten arrays, then `$group` to aggregate the unwound data.
- Apply `$match` **before** `$unwind` to reduce documents processed.
- Use `preserveNullAndEmptyArrays: true` to keep documents with missing arrays in results.
- `$unwind` with `$facet` enables multi-path analysis in one pipeline.

---

## `$concat` - Concatenate Strings

### 📌 Concept
`$concat` combines multiple strings or string field values into a single string.
- Useful for creating composite fields (e.g., full names, descriptions)
- Works in `$project` stage to transform/combine fields
- All inputs must be strings (convert numbers/dates first if needed)

### 🧾 Syntax
```js
// Basic concatenation with literals and fields
db.collection.aggregate([
  { 
    $project: { 
      fullName: { $concat: ["$firstName", " ", "$lastName"] }
    }
  }
])

// In $group accumulator context
db.collection.aggregate([
  {
    $group: {
      _id: { $concat: ["$category", "-", "$type"] },
      count: { $sum: 1 }
    }
  }
])
```

### ✅ Example

**Combine restaurant name and cuisine type:**
```js
db.restaurants.aggregate([
  {
    $project: {
      _id: 0,
      restauType: { $concat: ["$name", " - ", "$cuisine_type"] }
    }
  }
])

// Result:
// { restauType: "Mission Chinese Food - Asian" }
// { restauType: "Emily - Pizza" }
// { restauType: "The Dutch - American" }
```

**Create full address from parts:**
```js
db.users.aggregate([
  {
    $project: {
      _id: 0,
      fullAddress: { 
        $concat: [
          "$address.street",
          ", ",
          "$address.city",
          ", ",
          "$address.state",
          " ",
          "$address.zip"
        ]
      }
    }
  }
])

// Result: "123 Main St, NYC, NY 10001"
```

**Use with $group for composite keys:**
```js
db.sales.aggregate([
  {
    $group: {
      _id: { $concat: ["$year", "-Q", "$quarter"] },
      totalSales: { $sum: "$amount" }
    }
  }
])

// Result: { _id: "2024-Q1", totalSales: 50000 }
```

### ⚠️ Common Mistakes
- Mixing data types (numbers, dates) without converting them first to strings.
- Forgetting that `$concat` requires an **array** of values, not individual arguments.
- Using `$concat` on null/missing fields (will result in null).

### 💡 Tips
- Use `$concat` in `$project` to clean up output for reports.
- Combine with other operators like `$substr` or `$toLower` for more complex transformations.
- For null fields, use `$ifNull: ["$field", ""]` to provide default values.
- `$concat` is more readable than nested `$cond` logic for simple string joins.
