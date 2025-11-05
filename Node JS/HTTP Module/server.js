// HTTP Module :- This is very Powerfull Module using in Application 

const http = require('http')        

const server = http.createServer((req, res)=>{      // Create Server
    console.log(req.method)        
    console.log(req.url)

    if(req.url === '/getusers' && req.method === 'GET'){        // API to get Users
        const data = {              // Example data
            name : "Shailendra Kumar Pandey",
            email : 'shailendrakr2010@gmail.com',
            mobile : 9806638963
        }

        res.writeHead(200, {"content-type": "application/json"});       // Response Header

        res.end(JSON.stringify(data))       // Response Body

    }else{
        res.writeHead(404, {"content-type": "application/json"});       // Response Header for Page Not Found

        res.end("Page Not Found!")     // Response Body 

    }
})

server.listen(8000, ()=>{           // Server Listen on Port 8000
    console.log("SERVER is Running....")        // Server Running Message
})