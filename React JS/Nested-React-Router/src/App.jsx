import { Route, Routes} from 'react-router';
import NavBar from "./Component/NavBar.jsx"
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Contect from './Component/Contect.jsx';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route  path='/' element={<Home /> }   />
          <Route  path='/about' element={<About /> }   />
          <Route  path='/Contect' element={<Contect /> }>
              <Route path='' element={  } />
              <Route path='' element={  } />
              <Route path='' element={  } />
          </Route>   
          <Route  path='/*' element={<h1 style={{textAlign:'center'}}>Page Not Found 404</h1> }   />
      </Routes>
    </>
  )
}

export default App
