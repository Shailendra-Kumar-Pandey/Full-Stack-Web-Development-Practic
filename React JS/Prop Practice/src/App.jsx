import Object_Props from "./Component/Object_Props";
import Prop from "./Component/Prop";



const App = ()=>{
  const obj = {
    name : "Gayatri Sharma",
    age : 27,
    city: "panna"
  }

  return (
    <>
      <h1>Parent Component</h1>
      <Prop  name = "Shailendra Kumar Pandey" age = "21"/>
      <Object_Props user={obj}/>
    </>
  )
}


export default App;