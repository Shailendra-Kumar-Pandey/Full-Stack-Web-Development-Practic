// HTTP Module :- This is very Powerfull Module using in Application 

const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.method)
    console.log(req.url)

    if(req.url === '/getusers' && req.method === 'GET'){

        res.writeHead(200, {"content-type": "plain/text"});

        res.end("Hey My Name is Shailendra Kumar Pandey!")

    }else{
        res.writeHead(404, {"content-type": "plain/text"});

        res.end("Page Not Found!")

    }
})

server.listen(8000, ()=>{
    console.log("SERVER is Running....")
})