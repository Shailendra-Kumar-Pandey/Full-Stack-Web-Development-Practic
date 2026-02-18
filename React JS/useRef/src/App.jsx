import { useState } from "react";
import { useRef } from "react";
import Child from "./Child";



function App (){

  let [count, setCount] = useState(0)
  const data = useRef(100)  // useRef always hold Object

  function incressCount(){
    setCount(count + 1)
    data.current += 1
  }


  return(
    <>

        <h1>Count = {count}</h1>
        
        <br />
          <h2>useRef Data  = {data.current}</h2>
        <br />

        <button onClick={incressCount}>incress</button>



        <br /><br /><br />

        <Child/>
    </>
  )
}

export default App;