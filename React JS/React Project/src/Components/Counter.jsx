import { useState } from "react";

const Counter =  ()=>{
    let [count, setCount] = useState(0)
    return(
        <>
            <button onClick={()=>{setCount(count+1)}}>Counter : {count}</button>
        </>
    )
}

export default Counter;