# MongoDB Cheat Sheets — Complete Section Index

## 📋 All Playground Sections (40 Total)

### **File 1: foundations/database-and-collections-playground.mongodb.js**
- **SECTION 1** — SELECT A DATABASE
- **SECTION 2** — UNDERSTANDING COLLECTIONS
- **SECTION 3** — INSERT ONE DOCUMENT
- **SECTION 4** — VIEW DOCUMENTS
- **SECTION 5** — PRETTY OUTPUT
- **SECTION 6** — INSERT MANY DOCUMENTS
- **SECTION 7** — VERIFY THE DATA

### **File 2: queries/query-and-projection-playground.mongodb.js**
- **SECTION 8** — BASIC FILTERING
- **SECTION 9** — FILTER BY NUMBER COMPARISON
- **SECTION 10** — FILTER WITH MULTIPLE CONDITIONS
- **SECTION 11** — USING OR
- **SECTION 12** — PROJECT ONLY CERTAIN FIELDS
- **SECTION 13** — EXCLUDE _id
- **SECTION 14** — SORT RESULTS
- **SECTION 15** — LIMIT RESULTS
- **SECTION 16** — FIND ONE DOCUMENT

### **File 3: queries/nested-and-arrays-playground.mongodb.js**
- **SECTION 17** — QUERY INSIDE NESTED OBJECTS
- **SECTION 18** — QUERY ARRAYS

### **File 4: crud/create-and-read-playground.mongodb.js**
- Summary reference file (see sections 1-7, 16 in other files for details)

### **File 5: crud/update-delete-and-upsert-playground.mongodb.js**
- **SECTION 19** — UPDATE ONE DOCUMENT
- **SECTION 20** — VERIFY THE UPDATE
- **SECTION 21** — INCREMENT A VALUE
- **SECTION 22** — ADD A FIELD TO AN EXISTING DOCUMENT
- **SECTION 23** — REMOVE A FIELD
- **SECTION 24** — PUSH INTO AN ARRAY
- **SECTION 25** — UPDATE MANY DOCUMENTS
- **SECTION 26** — RENAME FIELDS IN MANY DOCUMENTS
- **SECTION 27** — DELETE ONE DOCUMENT
- **SECTION 28** — DELETE MANY DOCUMENTS

### **File 6: crud/collections-and-embedding-playground.mongodb.js**
- **SECTION 29** — COUNT DOCUMENTS
- **SECTION 30** — COUNT WITH A CONDITION
- **SECTION 31** — CREATE ANOTHER COLLECTION FOR RELATION-LIKE THINKING
- **SECTION 32** — EMBEDDING RELATED DATA
- **SECTION 33** — QUERY INSIDE EMBEDDED ARRAY OF OBJECTS

### **File 7: aggregation-playground.mongodb.js**
- **SECTION 34** — INTRO TO AGGREGATION
- **SECTION 35** — AGGREGATION WITH AVERAGE
- **SECTION 36** — MATCH + GROUP
- **SECTION 37** — SORT AGGREGATION RESULTS

### **File 8: indexing-playground.mongodb.js**
- **SECTION 38** — CREATE AN INDEX
- **SECTION 39** — VIEW INDEXES

### **File 9: practice-challenges-playground.mongodb.js**
- **SECTION 40** — PRACTICE CHALLENGES (8 challenge problems with solutions)

---

## 🎯 Quick Topic Reference

### Database & Collections
- **SECTION 1** — SELECT A DATABASE (foundations)
- **SECTION 2** — UNDERSTANDING COLLECTIONS (foundations)

### INSERT Operations
- **SECTION 3** — INSERT ONE DOCUMENT (foundations)
- **SECTION 6** — INSERT MANY DOCUMENTS (foundations)

### READ Operations
- **SECTION 4** — VIEW DOCUMENTS (foundations)
- **SECTION 5** — PRETTY OUTPUT (foundations)
- **SECTION 7** — VERIFY THE DATA (foundations)
- **SECTION 16** — FIND ONE DOCUMENT (queries)

### Filtering & WHERE Clauses
- **SECTION 8** — BASIC FILTERING (queries)
- **SECTION 9** — FILTER BY NUMBER COMPARISON (queries)
- **SECTION 10** — FILTER WITH MULTIPLE CONDITIONS (queries)
- **SECTION 11** — USING OR (queries)

### Projection & Field Selection
- **SECTION 12** — PROJECT ONLY CERTAIN FIELDS (queries)
- **SECTION 13** — EXCLUDE _id (queries)

### Sorting & Limiting
- **SECTION 14** — SORT RESULTS (queries)
- **SECTION 15** — LIMIT RESULTS (queries)

### Nested Objects & Arrays
- **SECTION 17** — QUERY INSIDE NESTED OBJECTS (queries)
- **SECTION 18** — QUERY ARRAYS (queries)
- **SECTION 32** — EMBEDDING RELATED DATA (crud)
- **SECTION 33** — QUERY INSIDE EMBEDDED ARRAY OF OBJECTS (crud)

### UPDATE Operations
- **SECTION 19** — UPDATE ONE DOCUMENT (crud)
- **SECTION 20** — VERIFY THE UPDATE (crud)
- **SECTION 21** — INCREMENT A VALUE (crud)
- **SECTION 22** — ADD A FIELD TO AN EXISTING DOCUMENT (crud)
- **SECTION 23** — REMOVE A FIELD (crud)
- **SECTION 24** — PUSH INTO AN ARRAY (crud)
- **SECTION 25** — UPDATE MANY DOCUMENTS (crud)
- **SECTION 26** — RENAME FIELDS IN MANY DOCUMENTS (crud)

### DELETE Operations
- **SECTION 27** — DELETE ONE DOCUMENT (crud)
- **SECTION 28** — DELETE MANY DOCUMENTS (crud)

### Counting & Aggregation
- **SECTION 29** — COUNT DOCUMENTS (crud)
- **SECTION 30** — COUNT WITH A CONDITION (crud)
- **SECTION 34** — INTRO TO AGGREGATION (aggregation)
- **SECTION 35** — AGGREGATION WITH AVERAGE (aggregation)
- **SECTION 36** — MATCH + GROUP (aggregation)
- **SECTION 37** — SORT AGGREGATION RESULTS (aggregation)

### Collections & Relationships
- **SECTION 31** — CREATE ANOTHER COLLECTION FOR RELATION-LIKE THINKING (crud)

### Indexing & Performance
- **SECTION 38** — CREATE AN INDEX (indexing)
- **SECTION 39** — VIEW INDEXES (indexing)

### Practice & Review
- **SECTION 40** — PRACTICE CHALLENGES (practice-challenges)

---

## 📂 File Organization Map

```
MongoDB-Cheat-Sheets/
├── README.md (this file)
├── PLAYGROUND-INDEX.mongodb.js (learning guide)
├── aggregation-playground.mongodb.js (SECTIONS 34-37)
├── indexing-playground.mongodb.js (SECTIONS 38-39)
├── practice-challenges-playground.mongodb.js (SECTION 40)
│
├── foundations/
│   └── database-and-collections-playground.mongodb.js (SECTIONS 1-7)
│
├── queries/
│   ├── query-and-projection-playground.mongodb.js (SECTIONS 8-16)
│   └── nested-and-arrays-playground.mongodb.js (SECTIONS 17-18)
│
└── crud/
    ├── create-and-read-playground.mongodb.js (reference file)
    ├── update-delete-and-upsert-playground.mongodb.js (SECTIONS 19-28)
    └── collections-and-embedding-playground.mongodb.js (SECTIONS 29-33)
```

---

## 🚀 Recommended Learning Order

1. **Start here:** PLAYGROUND-INDEX.mongodb.js
2. **Foundations:** foundations/database-and-collections-playground.mongodb.js (SECTIONS 1-7)
3. **Querying:** queries/query-and-projection-playground.mongodb.js (SECTIONS 8-16)
4. **Arrays & Nesting:** queries/nested-and-arrays-playground.mongodb.js (SECTIONS 17-18)
5. **CRUD Operations:** 
   - crud/create-and-read-playground.mongodb.js (reference)
   - crud/update-delete-and-upsert-playground.mongodb.js (SECTIONS 19-28)
6. **Collections:** crud/collections-and-embedding-playground.mongodb.js (SECTIONS 29-33)
7. **Aggregation:** aggregation-playground.mongodb.js (SECTIONS 34-37)
8. **Indexing:** indexing-playground.mongodb.js (SECTIONS 38-39)
9. **Practice:** practice-challenges-playground.mongodb.js (SECTION 40)

---

## 💡 Tips

- **Run one section at a time** and observe output before moving on
- **Modify code** to experiment — change filter values, add fields, try new operators
- **Cross-reference:** Look at SQL equivalents in comments to understand MongoDB syntax
- **Reset data:** Run foundations file again to repopulate collection with fresh data
- **Practice:** Section 40 has 8+ challenge problems to test your skills

