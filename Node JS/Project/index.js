const http = require('http');
const fileSystem = require('fs');
const reqURL = require('url');

const server =http.createServer((req, res)=>{

    let studentData = JSON.parse(fileSystem.readFileSync('./student.json', {encoding : 'utf-8'})) || [];
    console.log(studentData)

    let URL = reqURL.parse(req.url, true)
    // console.log(URL);

    // Create add new student using POST method
    if(req.url === '/addNewStudent' && req.method === 'POST'){
        //Create Uniqe ID
        let id = 1;
        if(studentData.length > 0){
            const lastId = studentData[studentData.length-1].id;
            id = lastId + 1;
        }

        // Get clint data in store variable
        let data = ''
        req.on('data' , (chunk)=>{
            data += chunk; 
        })

        req.on('end', ()=>{

            let newStudent = JSON.parse(data)

            console.log(newStudent)

            newStudent['id'] = id;

            console.log(newStudent)

            studentData.push(newStudent)

            fileSystem.writeFileSync('./student.json', JSON.stringify(studentData))

            res.writeHead(201, {'content-type' : 'application/json'});

            res.end(JSON.stringify({
                result : newStudent.id,
                massage : `${newStudent.name} is Add Student data Successfully....!`
            }))
        })   
    }else       // GET all data 
        if(req.url === "/getAllUsers" && req.method === 'GET'){
            res.writeHead('200', {'content-type' : 'application/json'})
            res.end(JSON.stringify({
                result : studentData,
                massage : "Successfully Fetch Student Data...!"
            }))
        }else
            // GET API find Single Student data 
            if(URL.pathname === '/singleStudent' && req.method === 'GET' ){

                if(!URL.query.id){
                    res.writeHead(401, {'content-type' : 'application/json'});
                    return res.end(JSON.stringify({
                        massage : "Please Provide ID Number..."
                    }))
                }

                let singleStudent = studentData.find((e) => Number(e.id) === Number(URL.query.id))

                if(!singleStudent){
                    res.writeHead(401, {'content-type' : 'application/json'});
                    return res.end(JSON.stringify({
                        massage : "Please Enter Vailid ID Number please try again letter..."
                    }))
                }

                res.writeHead(200, {'content-type' : 'application/json'});
                return res.end(JSON.stringify({
                        reult : singleStudent,
                        massage : `${singleStudent.name} ID ${singleStudent.id} Fetch Successfully...`
                    }))
            }else       
                // Method:- DELETE API ; delete the student data 
                if(URL.pathname === '/deleteStudent' && req.method === 'DELETE'){
                  
                    if(!URL.query.id){
                        res.writeHead(401, {'content-type' : 'application/json'});
                        return res.end(JSON.stringify({
                            massage : "Please Provide ID Number..."
                        }))
                    }

                    let studentIndex = studentData.findIndex((e) => Number(e.id) === Number(URL.query.id))
                    let deleteStudent = studentData[studentIndex]; 

                    if(studentIndex < 0){
                        res.writeHead(401, {'content-type' : 'application/json'});
                        return res.end(JSON.stringify({
                            massage : "Please Enter Vailid ID Number please try again letter..."
                        }))
                    }
                    studentData.splice(studentIndex, 1);
                    fileSystem.writeFileSync('./student.json', JSON.stringify(studentData));

                    res.writeHead(200, {'content-type' : 'application/json'});
                    return res.end(JSON.stringify({
                        reult : deleteStudent,
                        massage : `${deleteStudent.name} ID ${deleteStudent.id} Student DELETE Successfully...`
                    }))
                }else
                    // Update User data get API
                    if(URL.pathname === '/updateStudentdata' && req.method === 'PUT'){
                        if(!URL.query.id){
                            res.writeHead(401, {'content-type' : 'application/json'});
                            return res.end(JSON.stringify({
                                massage : "Please Provide ID Number..."
                            }))
                        }
                        
                        // if (!) {
                            
                        // }
                    }
})

server.listen(2000, ()=>{

    console.log("Sever is Running....")

})