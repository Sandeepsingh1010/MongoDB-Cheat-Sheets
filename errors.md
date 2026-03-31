# Common Errors & Tips

## Common Errors
- Missing $ in operators
- Wrong field names
- Updating without $set

## Example Mistake
❌ Wrong:
```js
db.users.updateOne({name:"John"}, {age:31})
```

✅ Correct:
```js
db.users.updateOne({name:"John"}, {$set:{age:31}})
```

## Tips
- Always check schema consistency
- Use indexes wisely
