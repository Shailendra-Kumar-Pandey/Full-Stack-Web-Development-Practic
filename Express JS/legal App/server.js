import app from "./app.js";
import connectDB from './src/configration/db.js'


connectDB()

app.listen(5050, ()=>{
   console.log("server is running...")
})
