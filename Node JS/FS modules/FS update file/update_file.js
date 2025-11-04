// FS Module :-
const fileSystem = require('fs')
/*  // This is using aSynchronous function using and update file
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
*/

//  Here use to Synchronous Function using and update file

let result = fileSystem.readFileSync("./demo.txt",{encoding:"utf-8"})

fileSystem.writeFileSync('./demo.txt',result.replace('This is', 'It is'))
