import Child_to_parent_Props from "./Component/Child_to_parent_Props";
import Object_Props from "./Component/Object_Props";
import Prop from "./Component/Prop";
import { useState } from "react";



const App = ()=>{

    const [data, setData] = useState("")

  function holdData (){    
    console.log(data)
  }

  const obj = {
    name : "Gayatri Sharma",
    age : 27,
    city: "panna"
  }

  return (
    <>
      <h1>Parent Component</h1>
      <Prop  name = "Shailendra Kumar Pandey" age = "21"/>
      <hr />
      <Object_Props user={obj}/>
      <hr />
      


      <Child_to_parent_Props  userData={setData}/>
      <br />
      <button onClick={holdData}>submit</button>
    </>
  )
}


export default App;