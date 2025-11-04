const fileSystem = require('fs')

// let result = fileSystem.readdirSync('.')             // Synchronous Task


// That are Asynchronus Task
let result 
fileSystem.readdir('.',(err, file)=>{
    if(!err){
        console.log("Show current directry!")
        result = file
        console.log(result) // print array
    }
})

console.log(result) // undifine




// fileSystem.mkdirSync("New Folder")       // This is Syncronous method

fileSystem.mkdir('./New Folder/Data',(err)=>{
    if(!err){
        console.log("Add Folder Successfully!")
    }
})
