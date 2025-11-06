const http = require('http');
const fs = require ('fs');

const server = http.createServer((req, res)=>{

    let data = '';
    if(req.url === "/getallusers" && req.method === "GET"){
        
    }
    req.on("data", (chunk)=>{
        console.log(chunk)
    })

    req.on("end", ()=>{

    })

    res.writeHead(200, {'content-type':'application/json'});

    res.end()

    
})

server.listen(4000, ()=>{

    console.log("Server is Running...")

})