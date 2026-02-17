import { useEffect } from "react";

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
            
        })
    },[])
    return(
        <>
            <h1>home page</h1>
        </>
    );
}

export default App;