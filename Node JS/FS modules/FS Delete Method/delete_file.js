// fs Module:-

const fileSystem = require('fs')

// this function is synchronous function usong delete file
// fileSystem.unlinkSync("./demo.txt")       

fileSystem.unlink('./data.txt',(err)=>{
    if(!err){
        console.log("This file has been Deleted!")
    }
})

