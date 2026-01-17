import { BrowserRouter, Route, Link, Routes} from 'react-router';

function App() {

  return (
    <>
      <h1>React Router in My Project</h1>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='Contect'>Contect</Link>
          <Routes>
            <Route path='/' element={ <h1>Home </h1> } />
            <Route path='/About' element={ <h1> About </h1> } />
            <Route path='/Contect' element={ <h1>Contect </h1> } />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
