use('College');

// Count all documents in the Students collection
    
    db.Students.countDocuments()

// Count documents where age is greater than 20
    
    db.Students.countDocuments({ age: { $gt: 20 } })