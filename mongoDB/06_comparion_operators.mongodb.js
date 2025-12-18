
use('College')

// $eq: Matches values that are equal to a specified value.

    db.Students.find({ age: { $eq: 20 } })

// $ne: Matches all values that are not equal to a specified value.

    db.Students.find({age : {$ne: 20}})

// $lt: Matches values that are less than a specified value.

    db.Students.find({age : {$lt: 20}})


// $lte: Matches values that are less than or equal to a specified value.

    db.Students.find({age: {$lte: 20}})

// $gt: Matches values that are greater than a specified value.

    db.Students.find({age : {$gt : 20}})

// $gte: Matches values that are greater than or equal to a specified value.

    db.Students.find({age : {$gte: 20}})

// $in: Matches any of the values specified in an array.

    db.Students.find({age: {$in: [19, 22]}})

// $nin: Matches none of the values specified in an array.

    db.Students.find({age: {$nin: [19, 20, 21, 22]}})

// $all: Matches arrays that contain all elements specified in the query.

    // db.Students.find({age: {$all: [19]}})

// $size: Matches arrays with the specified number of elements.

    // db.Students.find({age: {$size: 10}})

    