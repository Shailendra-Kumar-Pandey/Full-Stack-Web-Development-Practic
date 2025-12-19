use('College');

// countDocuments():- this method is used to count the number of documents in a collection that match a specified query. If no query is provided, it counts all documents in the collection.

// Count all documents in the Students collection
    
    db.Students.countDocuments()

// Count documents where age is greater than 20
    
    db.Students.countDocuments({ age: { $gt: 20 } })

// Count documents where major is 'Computer Science'
    
    db.Students.countDocuments({ major: 'Computer Science' })

// Count documents where enrolled is true
    
    db.Students.countDocuments({ age: 20 })