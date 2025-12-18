
use('College')

// find():- Show Students collection inside Student data will be show using this query

    db.Students.find()

// show teachers collection inside teachers data will be show using this query

    db.teachers.find()



// find({prop:value}):-  using the query find any document will be use  find function inside condition then show the document find({prop:value})

    db.teachers.find({age:38})

    db.Students.find({age:30})  // show full document