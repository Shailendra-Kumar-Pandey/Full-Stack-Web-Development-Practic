use('College');

// Aggregate():- An aggregate function in MongoDB is used to process data records and return calculated results.

// 1. $match: Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
db.students.aggregate([
  { $match: { age: { $gt: 20 } } }
]);