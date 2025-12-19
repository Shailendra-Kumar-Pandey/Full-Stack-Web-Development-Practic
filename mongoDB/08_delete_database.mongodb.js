use('College');

// Deleting the document

// deleteOne():- This method is used to delete a single document that matches the specified filter.

    db.Students.deleteOne({ name: 'Neha Singh'})

    db.Students.find()

// deleteMany():- This method is used to delete multiple documents that match the specified filter.

    db.Students.deleteMany({ age: { $gt: 22 }})

    db.Students.find()


// drop():- This method is used to delete an entire collection from the database.

    // db.Students.drop()

// dropDatabase():- This method is used to delete the entire database.

    // db.dropDatabase()
    // use('College');
    // show dbs 
    // 