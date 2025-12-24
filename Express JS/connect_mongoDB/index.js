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

// Create a MongoDb new Collection 
const Students = mongoose.model('student', studentSchema)






app.listen(5050, ()=>{
    console.log("Server is Running...");
})