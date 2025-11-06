const http = require('http');
const fs = require ('fs');

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'content-type':'application/json'});

    res.end()

})

server.listen(4000, ()=>{

    console.log("Server is Running...")

})