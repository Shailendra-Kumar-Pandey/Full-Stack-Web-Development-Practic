

use('College')


// $and: Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
/* Examples:
     db.Students.find({ $and: [ { age: { $gt: 18 } }, { age: { $lt: 25 } } ] })
*/

// $or: Joins query clauses with a logical OR returns all documents that match the conditions of either clause.


// $nor: Joins query clauses with a logical NOR returns all documents that fail to match both clauses.


// $not: Inverts the effect of a query expression and returns documents that do not match the query expression.

