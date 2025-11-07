const http = require('http');
const fileSystem = require ('fs');


const server = http.createServer((req, res)=>{

    // Get All user API:- /getallusers
    if(req.url === "/getallusers" && req.method === "GET"){
        
        
        
        res.writeHead(200, {'content-type':'application/json'});
        
        let data =  fileSystem.readFileSync("./student.json",{encoding : "utf-8"})

    
        res.end(JSON.parse(JSON.stringify(data)))

    }else{

        res.writeHead(404, {'content-type':'application/json'});

        res.end(JSON.parse(JSON.stringify("Somthing want Wronge...!")))

    }


    //POST Method:- 
})


    // req.on("data", (chunk)=>{
    //     console.log(chunk)
    // })

    // req.on("end", ()=>{

    // })


    

server.listen(4000, ()=>{

    console.log("Server is Running...")

})