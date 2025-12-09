const express = require('express');

const server = express()

server.get("/getStudents", (req, res)=>{
    
    res.send({massage : "Student Data successfully archive...",
            data: [{name:"shailendra", age:30},{name:"gayatri",age:28}]})

})

server.listen(4000, ()=>{
    console.log("Server is Running...")
})