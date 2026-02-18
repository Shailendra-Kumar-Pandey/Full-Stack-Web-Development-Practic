import { useEffect, useState } from "react";
import Users from "./Users";

function App(){
    let [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users", {
            method:"GET"
        })
        .then((res)=>res.json())
        .then((response)=>{
            setData(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    // console.log(data)
    return(
        <>
            <div className="title">
                <h1>User Data</h1>
            </div>

            <Users userData={data}/>

        </>
    );
}

export default App;