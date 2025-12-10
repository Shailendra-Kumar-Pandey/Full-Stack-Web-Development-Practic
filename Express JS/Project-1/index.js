const express = require('express');

const server = express()

// middleware - just like watchman

// 1. Application level Middleware

server.use((req, res, next)=>{

    let isAuthorizedUser = true;
    if(isAuthorizedUser){
        next();
    }else{
        res.send({massage:"Unauthorized"});
    }

})



// Get API

server.get("/getStudents", (req, res)=>{
    
    res.send({massage : "Student Data successfully archive...",
            data: [{name:"shailendra", age:30},{name:"gayatri",age:28}]})

})

// Post API 

server.post("/addStudent", (req, res)=>{
    const data = req.body

    console.log(data)

    res.send({massage : "Data Receved..."})
})

server.listen(4000, ()=>{
    console.log("Server is Running...")
})


