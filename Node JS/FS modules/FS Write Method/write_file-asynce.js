// fs module:-
const fileSystem = require('fs')

fileSystem.writeFile("./demo.txt", "Hey, What is your Name?", (err)=>{
    if(!err){
        console.log("Create file Successfully!");
    }
})

// writefile function :- This function is a asynchronus task using Create File and add data Also.