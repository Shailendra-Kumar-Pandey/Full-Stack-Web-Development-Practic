import express from "express";
import mongoDB from './db.js'
const app = express();

mongoDB()


app.listen(3000, ()=>{
    console.log("Server is Running...");
})