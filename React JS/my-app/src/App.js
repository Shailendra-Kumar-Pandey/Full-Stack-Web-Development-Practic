import { useState } from 'react';
import './App.css';

import Clock from'./Components/Clock.js';



function App() {

  const [color, setColor] = useState('red')

  return (
    <>
     <h1>digital Clock</h1>



      <br />


      <Clock color = {color} />

      <br />

      <input type="color" onChange={(e)=>{setColor(e.target.value)}} />
    </>
  );
}

export default App;
