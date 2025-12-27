import mongoose from "mongoose";
import User from "./Model/User.js";
import Company from "./Model/Company.js";
import Job from "./Model/Job.js";
import application from "./Model/application.js";

async function connectDB (){
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/applied-jobs')
       console.log('mongoDB server is Connected successfully...') 
    } catch (error) {
        console.log(error);
        console.log("Somthing went wrong in mongoDB Server....")
    }
    
} 

export default connectDB;