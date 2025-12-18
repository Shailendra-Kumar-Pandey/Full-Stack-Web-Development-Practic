
use('College')


// deleteOne():- using deleteOnde() we can delete only one document at a time.

    db.Students.deleteOne({name:"Shailendra Kumar Pandey"})

    db.Students.find()

// deleteMany():- using deleteMany() we can delete multiple documents at a time.

    db.Students.deleteMany({name:"Shailendra Kumar Pandey"})

    db.Students.find()