import { useEffect } from "react";
import Users from "./Users";

function App(){
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users", {
            method:"GET"
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <>
            <div className="title">
                <h1>User Data</h1>
            </div>

            <Users/>

        </>
    );
}

export default App;