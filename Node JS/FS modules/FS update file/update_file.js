// FS Module :-
const fileSystem = require('fs')

fileSystem.readFile("./demo.txt",{encoding : "utf-8"}, (err, data)=>{
    if(!err){
        let result = data;
        fileSystem.writeFile("./demo.txt",result.replace("it is","This is"), (err)=>{
            if(!err){
                console.log("Update Data Sucessefully!")
            }
        })
    }
})
