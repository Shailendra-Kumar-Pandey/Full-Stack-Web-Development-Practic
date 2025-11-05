// HTTP Module :- This is very Powerfull Module using in Application 

const http = require('http')

const server = http.createServer((req, res)=>{
    
    res.writeHead(200, {"content-type": "plain/text"});
    res.end("Hey My Name is Shailendra Kumar Pandey!")
})

server.listen(8000, ()=>{
    console.log("SERVER is Running....")
})