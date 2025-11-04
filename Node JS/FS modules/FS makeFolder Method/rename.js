const fileSystem = require('fs')

// fileSystem.renameSync('./New Folder', './Jeetu Bhai')        // THis function is Synchronous Function

// This is Asynchronous Method using by Call-Backs
fileSystem.rename('./Jeetu Bhai', './Data', (err)=>{
    if(!err){
        console.log("Rename file Successfully Complited!")
    }
})