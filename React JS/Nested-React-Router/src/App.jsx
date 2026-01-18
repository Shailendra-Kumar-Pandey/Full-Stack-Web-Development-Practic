import { Route, Routes} from 'react-router';
import NavBar from "./Component/NavBar.jsx"
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Contect from './Component/Contect.jsx';
import Name from './Component/Name.jsx';
import Address from './Component/Address.jsx';
import Phone from './Component/Phone.jsx';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route  path='/' element={<Home /> }   />
          <Route  path='/about' element={<About /> }   />
          <Route  path='/Contect' element={<Contect /> }>
              <Route path='name' element={<Name />} />
              <Route path='address' element={<Address />}/>
              <Route path='phone' element={<Phone />} />
          </Route>   
          <Route  path='/*' element={<h1 style={{textAlign:'center'}}>Page Not Found 404</h1> }   />
      </Routes>
    </>
  )
}

export default App
