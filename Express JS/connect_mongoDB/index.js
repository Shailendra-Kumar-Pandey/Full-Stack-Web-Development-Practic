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
    try {
        const payload = await Students.create(req.body)
        res.send({
            massage: "Student Add Create ",
            result: payload
        })
    } catch (error) {
        res.send({error:"Somthing went wrong..."})
    }
})


// get all Student - GET API
app.get('/getAllStudents', async (req, res)=>{
try {
    const data = await Students.find()
    res.send({
        massage : "Get All Student Successfully...",
        result : data
    })
} catch (error) {
    res.send({error:"Somthing went wrong..."})
}
})

// update user - PUT API
app.put("/updateStudent/:id", async (req, res)=>{
    try {
        const updateData = await Students.findByIdAndUpdate(
           req.params.id,
           req.body,
           { new: true }   // return update data
        ) 
        res.send({result: req.params.id})
    } catch (error) {
        res.send({error : "Update Failed"});        
    }
})


// Delete Student :- DELETE API
app.delete('/deleteStudent/:id', async (req, res)=>{
    try {
        const deleteStudent = await Students.findByIdAndDelete(
            req.params.id
        )
        res.send({
            massage: "Student Deleted Successfully...",
            result: deleteStudent
        })
    } catch (error) {
        res.send({error:"Somthing went wrong..."})
    }
})



app.listen(5050, ()=>{
    console.log("Server is Running...");
})