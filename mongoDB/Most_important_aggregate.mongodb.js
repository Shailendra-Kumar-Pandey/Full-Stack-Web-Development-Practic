use('College');

// Aggregate():- An aggregate function in MongoDB is used to process data records and return calculated results.
// Aggregation in MongoDB is used to process multiple documents and perform operations like filtering, grouping, and calculating values such as sum, average, minimum, and maximum.
/*
MongoDB uses aggregation pipeline:
Syntex:-
  db.collection.aggregate([
    { stage1 },
    { stage2 },
    { stage3 }
  ])

*/

/*
In MongoDB Aggregation Pipeline, there is NO fixed total number of functions,
because MongoDB provides many aggregation stages and operators.

But for interview & learning, we usually remember the main stages.

✅ Main Aggregation Pipeline Stages (Most Important)
🔹 Core Stages (Most Used) – 10

$match – filter documents

$group – group data

$project – select / reshape fields

$sort – sort documents

$limit – limit number of documents

$skip – skip documents

$lookup – join collections

$unwind – break array into documents

$count – count documents

$addFields – add new fields

👉 Interview answer: Around 10 main aggregation stages are commonly used.

✅ Other Important Stages (Advanced)

$facet

$bucket

$bucketAuto

$replaceRoot / $replaceWith

$sample

$set

$merge

$out

✅ Common Aggregation Operators (Functions)
🔸 Arithmetic / Accumulators

$sum

$avg

$min

$max

$first

$last

$push

$addToSet

📌 Interview Short Answer (BEST)

MongoDB aggregation pipeline has around 10 commonly used stages, and more than 20 stages and operators in total.

📌 Simple Line

👉 Aggregation pipeline ≠ single function
👉 It is a set of stages & operators

*/
// 1. $match: Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
db.students.aggregate([
  { $match: { age: { $gt: 20 } } }
]);