use('College');

// sort():- this method is used to sort the documents in a collection based on specified fields. You can sort in ascending (1) or descending (-1) order.

// Sort all documents in the Students collection by age in ascending order
    db.Students.find().sort({ age: 1 })

// Sort all documents in the Students collection by name in descending order
    db.Students.find().sort({ name: -1 })

// limit():- this method is used to limit the number of documents returned in a query result.

// Limit the result to 5 documents
    db.Students.find().limit(5)

// Limit the result to 3 documents after sorting by age in descending order
    db.Students.find().sort({ age: -1 }).limit(3)

// Skip():- this method is used to skip a specified number of documents in the query result.

// Skip the first 2 documents and return the rest
    db.Students.find().skip(2)

// Skip the first 3 documents and limit the result to 4 documents
    db.Students.find().skip(3).limit(4)

// Combining sort(), limit(), and skip():- you can combine these methods to achieve more complex queries.

// Sort by age in ascending order, skip the first 2 documents, and limit the result to 3 documents
    db.Students.find().sort({ age: 1 }).skip(2).limit(3)

// use $gt operator to filter documents where age is greater than 20, sort by name in ascending order, and limit the result to 4 documents
    db.Students.find({ age: { $gt: 20 } }).sort({ name: 1 }).limit(4)

// Sort by age in descending order and name in ascending order, skip the first document, and limit the result to 5 documents
    db.Students.find().sort({ age: -1, name: 1 }).skip(1).limit(5)

    // using two conditions in find()
    db.Students.find({ age: { $gte: 18 }, name: { $regex: /^A/ } }).sort({ age: 1 }).limit(3)