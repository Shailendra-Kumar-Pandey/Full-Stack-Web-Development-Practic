import { useState } from "react"
import College from "./Component/College"
import {StudentContext} from './Component/contextData'

function App() {
  const [subject, setSubject] = useState("")
  
  return (
    <>
      <div style={{backgroundColor:'lightcoral', padding:'10px', borderRadius:'5px'}}>
        <StudentContext.Provider value={subject}>
          <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
            <option value={subject}>Select Subject</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Science">Science</option>
            <option value="Hindi">Hindi</option>
          </select>
          <br />
            <h1 style={{color:'whitesmoke'}}>Context API Component Example How to Work in React inside Context API</h1>
          <button onClick={()=>setSubject('')}>Clear</button>
            <College />
        </StudentContext.Provider>
      </div>
    </>
  )
}

export default App
