import React from "react";
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import Contact from './Component/Contact';

function App(){
  return(
    <>
        <h1>React Router Dom</h1>
        <div>
          <Home/>
          <About/>
          <Product/>
          <Contact/>
        </div>
    </>
  );
}

export default App;