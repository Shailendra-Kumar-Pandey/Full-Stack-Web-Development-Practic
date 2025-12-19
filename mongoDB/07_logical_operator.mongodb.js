

use('College')


// $and: Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// this opretor 
/* Examples:
     db.Students.find({ $and: [ { age: { $gt: 18 } }, { age: { $lt: 25 } } ] })
*/

     db.Students.find({$and : [{age:20}]})

     db.Students.find({$and : [{age:20} ,{course:'BCA'}]})
     
     // db.Students.find()

// $or: Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

     db.Students.find({$or : [{age:20}, {course:'BCA'}]})        


// $nor: Joins query clauses with a logical NOR returns all documents that fail to match both clauses.

     db.Students.find({$nor : [{age:20}, {course:'BCA'}]})        


// $not: Inverts the effect of a query expression and returns documents that do not match the query expression.

     db.Students.find({$not : [{age:20}, {course:'BCA'}]})

