use('College');

// Aggregate():- Aggregate function is used to perform operations on the data and return computed results.

// 1. $match: Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
db.students.aggregate([
  { $match: { age: { $gt: 20 } } }
]);