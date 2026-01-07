import './App.css';

import Color from'./Components/Color.js';
import Clock from './Components/Clock.js';



function App() {
  const data = new Date();
    console.log(data)
  return (
    <>
     <h1>digital Clock</h1>

      <Color />    


      <br />
      <br />
      <Clock  data= {data.getHours} />

    </>
  );
}

export default App;
