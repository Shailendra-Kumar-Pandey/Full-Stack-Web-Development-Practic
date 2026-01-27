import mongoose from "mongoose";

const connectDb = ()=>{
    mongoose.connect(
    'mongodb://127.0.0.1:27017/demo'
).then((res)=>{
    console.log('mongoDB is Connected...')
}).catch((err)=>{
    console.log(err)
})
}


export default connectDb;