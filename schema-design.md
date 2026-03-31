# Schema Design

## Embed vs Reference

### Embed
```json
{
  "user": "Alice",
  "orders": [{ "item": "Laptop" }]
}
```

### Reference
```json
{
  "user_id": 1,
  "order_id": 101
}
```

## Tip
- Use embedding for read-heavy apps
- Use references for large/complex relations
