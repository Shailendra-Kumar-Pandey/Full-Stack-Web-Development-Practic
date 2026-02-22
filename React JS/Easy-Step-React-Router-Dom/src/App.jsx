import React from "react";
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import Contact from './Component/Contact';
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <>
        
        <div>
          <BrowserRouter>
          <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/Product" element={<Product/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
          
        </div>
    </>
  );
}

export default App;