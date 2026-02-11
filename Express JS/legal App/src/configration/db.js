import mongoose from "mongoose";


const connectDB = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/data')
    .then((res)=>{
        console.log('mongodb is connecting...')
    })
    .catch((err)=>{
        console.log(err)
    })
}


export default connectDB;