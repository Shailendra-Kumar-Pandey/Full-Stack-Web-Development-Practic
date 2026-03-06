import {  Routes, Route, useNavigate } from 'react-router-dom';
import Home from './componants/Home';
import Form from './componants/Form';
import { useRef } from 'react';

function App() {
 
  const navigator = useNavigate()

  let data = useRef([])



  return (
    <>
          <Routes>
              <Route path='/'  element={<Home  onNavigate={() => {navigator('/form')}}/>} />
              <Route path='/form' element={<Form onNavigate={() => {navigator('/')}} />} />
          </Routes>        
    </>
  );
}

export default App;
