import app from './app.js';
import connectDb from './config/db.js';

connectDb()

app.listen(9000, ()=>{
    console.log("Server is Running...");
})

