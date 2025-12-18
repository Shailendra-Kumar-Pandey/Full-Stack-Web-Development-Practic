
use('College')

// updateOne:- using this query update Single Document but First should be condition then second object using $set then start new object and add value and add key:value

db.Students.updateOne({name:'Shailendra Kumar Pandey'}, {$set:{age:28}})

db.Students.updateOne({name:'Shailendra Kumar Pandey'}, {$set:{class:'FSW'}})

db.Students.find({age:28})


// updateMany:- this Query should be using inside first object Blank and second Object $set then nested obeject will be start and updated any value and new value will be add all document.


db.Students.updateMany({},{$set:{active:true}})

db.Students.find()