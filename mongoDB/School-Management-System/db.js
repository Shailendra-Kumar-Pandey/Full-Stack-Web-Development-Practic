import mongoose from 'mongoose';

const mongoDB_URL = "mongodb://127.0.0.1:27017/student-management-system"

async function connectDB() {
    try {
        await mongoose.connect(mongoDB_URL);
        console.log("mongoDB Server connect...");   
    } catch (error) {
        console.log(error, "Somthing went wrong...")
    }
}

export default connectDB;