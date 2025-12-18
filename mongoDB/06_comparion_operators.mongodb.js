
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

    db

// $gte: Matches values that are greater than or equal to a specified value.

// $in: Matches any of the values specified in an array.


// $nin: Matches none of the values specified in an array.

    