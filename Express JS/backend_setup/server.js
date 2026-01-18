import app from "./app.js";
import DB from "./configer/db.js"


// mongoDB Database connect
    DB()

app.listen(8000, ()=>{
    console.log("Server is Running...")
})