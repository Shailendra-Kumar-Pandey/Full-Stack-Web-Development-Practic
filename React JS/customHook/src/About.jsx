import React from 'react'
import { useMathProblem } from './useChangeState'

function About() {
    let {count, increment,reset} = useMathProblem(100)
  return (
    <>
      <h1>About Page</h1>
      <h1 style={{textAlign:'center'}}>Counter = {count}</h1><br />
      <div style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'10px'}}>

        <button onClick={increment}>increment</button> <br /><br />
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default About
