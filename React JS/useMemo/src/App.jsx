import { useState, useMemo } from "react"

function App() {

  const[count, setCount] = useState(0)
  const[num, setNum] = useState(5)

  function expensiveCalculate(n){
    console.log("Calculateing....")
    console.log("function", n)
    return n * 2;
  }

  const result = useMemo(()=>{
    console.log("useMemo:", num)
    return expensiveCalculate(num)
  },[num]);


  return (
   <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
    <div style={{width:"400px", padding: "10px", border:"1px solid red", display:"flex", justifyContent:"center", gap:"10px",flexDirection:"column "}}>
        <h1 style={{textAlign:"center",}}>Result = {result}</h1>
          <button onClick={()=> setCount(count+1)}>Increse Count</button>
          <button onClick={()=> setNum(num+1)}>change Number</button>
    </div>
   </div>
  )
}

export default App
