const http = require('http');
const fileSystem = require('fs');
const url = require('url')



const server = http.createServer((req, res)=>{

    console.log(req.url)
    let baseUrl = url.parse(req.url, true) 
    console.log(baseUrl)


    let studentData = JSON.parse(fileSystem.readFileSync("./student.json", {encoding : "utf-8"})) || [];


    //Post API :- 
     
    if(req.url === '/addNewStudent' && req.method === 'POST'){

        let id = 1;

        if(studentData.length > 0){
            let lastId = studentData[studentData.length-1].id;
            id = Number(lastId) + 1;
        }

        let data = ''

        req.on('data', (chunk)=>{
            data += chunk;
            console.log(data)
        })

        req.on('end', ()=>{
            console.log(JSON.parse(data))

            let lastStudent = JSON.parse(data);
    
            lastStudent['id'] = id;
    
            studentData.push(lastStudent);
    
            fileSystem.writeFileSync('./student.json', JSON.stringify(studentData));
    
            res.writeHead(201 , {'content-type':'application/json'});
    
            res.end(JSON.stringify({
                result : studentData[studentData.length-1].id,
                massage : "Add Student Successfully...!"
            }))
        })

    }else      
        
        // Get All Student GET-API
        if(req.url === '/getAllStudent' && req.method === 'GET'){     

            res.writeHead(200, {'content-type' : 'application/json'});

            res.end(JSON.stringify(studentData))

        }else
            // Find Single Student Data
            if(baseUrl.pathname === '/singleStudent' && req.method === 'GET'){

                let userId = baseUrl.query.id

                if(!userId){
                    res.writeHead(401, {'content-type' : 'application/json'})
                    return res.end(JSON.stringify({
                        massage : "Please Provide ID...!"
                    }))
                }

                let singleStudent = studentData.find((ele) => Number(ele.id) === Number(userId))
                if(!singleStudent){
                    res.writeHead(401, {'content-type' : 'application/json'})
                    return res.end(JSON.stringify({
                        massage : "Invalid Student ID...!"
                    }))
                }

                res.writeHead(200, {'content-type' : 'application/json'})
                return res.end(JSON.stringify({
                        result : singleStudent,

                        massage : `${singleStudent.name} find student successfully....`
                    }))

            }
})

server.listen(9000, ()=>{
    console.log("Server is Running..!")
})