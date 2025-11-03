const fs = require("fs")

// readFile function :- This fumction is a Asynchronous Task, explain it.

console.log("1")

fs.readFile("./hello.txt",{encoding : "utf-8"}, (err, data)=>{
    if(!err){
        console.log("2",data)
    }else{
        console.log(err)
    }
})

console.log("3")

// output :- 
// 1
// 3
// 2 (Print .txt file data)