import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Form from "./Form"


function App() {

  return (
    <>
      {/* <h1>tailwindcss</h1> */}

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Form/>}/>
          </Routes>
      </BrowserRouter>

      {/* <Form/> */}
      {/* <Home/> */}
    </>
  )
}

export default App
