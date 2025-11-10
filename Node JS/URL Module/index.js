// URL Module:- The URL module provides utilities for URL resolution and parsing.

const http = require('http');
const url = require('url');


const server = http.createServer((req, res)=>{


    const parseURL = url.parse(req.url, true)

    console.log(parseURL)

    if(req.url === "/user" && req.method === "GET"){
        const data = {
            name :"shailendra Kumar Pandey",
            mobile : 9806638963,
            email : "shailendrakr2010@gmail.com"
        }

        res.writeHead(200, {"content-type": "application/json"});
        res.end(data)
    }else{

        res.writeHead(404, {"content-type" : "application/json"});
        res.end(JSON.stringify({
            message:"Not Found!"
        }))
    }

})

server.listen(2000, ()=>{
    console.log("Server is Running...")
})