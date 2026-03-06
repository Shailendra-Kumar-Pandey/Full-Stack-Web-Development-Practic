import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componants/Home';
import Form from './componants/Form';

function App() {
 

  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path='/'  element={<Home />} />
              <Route path='/form' element={<Form />} />
          </Routes>        
        </BrowserRouter>     
    </>
  );
}

export default App;
