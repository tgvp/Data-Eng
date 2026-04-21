# Step by Step for Week 4 Practice

"We are repeating the same workflow from the PostgreSQL classes. We still use Docker Compose and we still place an initialization file inside `rsc`. The difference is that now the initialization file is `init.js` instead of `init.sql`, because MongoDB is initialized with JavaScript. After the container is up, we enter it with `mongosh`, inspect the `students` collection, and run a few simple `find()` queries before trying one small aggregation."


## Goal

Replicate the same practice flow used in the previous weeks:

1. prepare files
2. run Docker Compose
3. initialize the database automatically
4. enter MongoDB with mongosh
5. run a few simple queries

The difference is that now the database is MongoDB instead of PostgreSQL.

## Project layout

```text
prj/
  docker-compose.yml
  rsc/
    init.js
```

## What each file does

### `docker-compose.yml`

- starts the MongoDB service
- publishes MongoDB on port `27017`
- mounts `./rsc/init.js` into MongoDB startup folder

### `rsc/init.js`

- creates the database `university_mongo`
- creates the collection `students`
- inserts sample documents
- creates a few simple indexes

## Commands to run

Open a terminal inside `prj` and run:

```bash
docker compose down -v
docker compose up -d --build
docker ps
```

## What students should observe

### After `docker compose down -v`

- old containers are removed
- the old volume is removed
- the database starts fresh

### After `docker compose up -d --build`

- MongoDB starts
- `init.js` runs automatically the first time the MongoDB volume is created

This is the MongoDB equivalent of how `init.sql` was used with PostgreSQL in previous weeks.

## Mongo shell access

```bash
docker exec -it lab-mongo mongosh -u labuser -p labpass --authenticationDatabase admin
```

Then switch to the practice database:

```javascript
use("university_mongo")
```

## First simple queries

### 1. Show all students

```javascript
db.students.find()
```

- a collection is similar to a table
- a document is similar to a row
- but documents can contain nested objects and arrays

### 2. Show only a few fields

```javascript
db.students.find(
  {},
  { _id: 0, student_number: 1, full_name: 1, status: 1 }
)
```

- this is a projection
- `_id: 0` hides the MongoDB internal identifier

### 3. Filter by nested field

```javascript
db.students.find(
  { "department.name": "Computer Science" },
  { _id: 0, full_name: 1, department: 1 }
)
```

- dot notation allows access to nested fields
- this is simpler to read than a SQL join for this specific access pattern

### 4. Filter by array contents

```javascript
db.students.find(
  { "enrolled_courses.code": "CS101" },
  { _id: 0, full_name: 1, enrolled_courses: 1 }
)
```

- MongoDB can match inside arrays of embedded documents
- no join is needed because course data is already embedded inside the student document

### 5. Small aggregation

```javascript
db.students.aggregate([
  {
    $group: {
      _id: "$status",
      total_students: { $sum: 1 }
    }
  }
])
```

- aggregation here plays the role of `GROUP BY`
- this is a good first contact with `aggregate()`

## Practical validation

- MongoDB container running on port `27017`
- MongoDB authentication with `labuser / labpass`
- dataset loaded with `8` student documents
