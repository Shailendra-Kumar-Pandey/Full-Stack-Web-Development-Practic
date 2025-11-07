const http = require('http');
const fileSystem = require('fs');
const reqUrl = require('url');
const { json } = require('stream/consumers');
const { error } = require('console');


const server = http.createServer((req, res)=>{


    let studentData = JSON.parse(fileSystem.readFileSync("./student.json", {encoding : "utf-8"})) || [];


    //Post API :- 
     
    if(req.url === '/addNewStudent' && req.method === 'POST'){

        let id = 1;

        if(studentData.length > 0){
            let lastId = studentData[studentData.length-1].id;
            id = Number(lastId) + 1;
        }

        let data = ''

        res.on('data', (chunk)=>{
            data += chunk;
            console(data)
        })

        res.on('end', ()=>{
            console.log(JSON.parse(data))

            let lastStudent = JSON.parse(data);
    
            lastStudent['id'] = id;
    
            studentData.push(lastStudent);
    
            fileSystem.writeFileSync('./student.json', JSON.stringify(studentData));
    
            res.writeHead(200 , {'content-type':'application/json'});
    
            res.end(JSON.stringify({
                result : lastStudent.id,
                massage : "Add Student Successfully...!"
            }))
        })

    }else{
        res.writeHead(404 , {'content-type':'application/json'});
        res.end(JSON.stringify(
            {
                error : error,
                massage : "Somthing went wrong...!"
            }
        ))
    }
})

server.listen(9000, ()=>{
    console.log("Server is Running..!")
})