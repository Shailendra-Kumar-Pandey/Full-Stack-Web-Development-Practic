const express = require('express');
const server = express();



//Get APi
server.get('/getUsers', (req, res)=>{
    res.send([{name:"uzaif", age : 26},{name:'shailendra', age: 30}])
})

// Build in Middileware
server.use(express.json())

// post api

server.post('/adduser',(req, res)=>{
    const data =  req.body;
    console.log(data);
    res.send({massage: "data recive..."})
})


server.listen(2000, ()=>{
    console.log("Server is Running...")
})