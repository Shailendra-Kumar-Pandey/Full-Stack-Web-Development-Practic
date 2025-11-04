// FS Module :-
const fileSystem = require('fs')

fileSystem.appendFile("./demo.txt","\nMy Father Name is Shalig Ram Pandey",(err)=>{
if(!err){
    console.log("Append Data Successfully!");
}
})

// appendFile Function :- This function is aSynchronous Function, this function append data are existing file.