const express = require('express');
const mongoose = require('mongoose');

const app = express();

// mongoose.connect("mongodb://127.0.0.1:27017/Student-management-systam" )

// Connect to mongoDB Server 
const connectDB = async () => {
  try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Student-management-system");
        console.log("MongoDB Connected Successfully");
  } catch (error) {
        console.error(error);
        console.log("MongoDB Connection Failed");
  }
};

connectDB()


const studentSchema = new mongoose.Schema(
    {},
    {strict:false}
)


//Build in middleware
app.use(express.json())

// Create a MongoDb new Collection 
const Students = mongoose.model('student', studentSchema)

// POST API - create new Student
app.post('/addStudent', async (req,res)=>{
    
    const payload = await Students.create(req.body)

    res.send({
        massage: "Student Add Create ",
        result: payload
    })
})


// get all Student - GET API

app.get('/getAllStudents', async (req, res)=>{

    const data = await Students.find()

    res.send({
        massage : "Get All Student Successfully...",
        result : data
    })
})

// update user - PUT API

app.put('/updateSudent/:id', async (req, res)=>{

     const updateData = await Students.findByIdAndUpdate(req.params.id, res.body)  // Somthing Wrong this line
        res.send({result: updateData})

})

app.listen(5050, ()=>{
    console.log("Server is Running...");
})