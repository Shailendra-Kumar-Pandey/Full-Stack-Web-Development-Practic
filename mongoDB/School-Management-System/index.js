import express from 'express';
import connectDB from './db.js';
const app = express();

connectDB()

app.listen(5050, ()=>{
    console.log("Server is Running...")
})