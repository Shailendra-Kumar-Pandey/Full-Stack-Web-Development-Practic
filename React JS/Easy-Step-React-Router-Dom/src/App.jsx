import React from "react";
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import Contact from './Component/Contact';
import Header from "./Component/Header";
import SingleProduct from "./Component/SingleProduct";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <>
        
        <div>
          <BrowserRouter>
          <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/product" element={<Product/>}/>
                  <Route path="/product/:id" element={ <SingleProduct/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
          
        </div>
    </>
  );
}

export default App;