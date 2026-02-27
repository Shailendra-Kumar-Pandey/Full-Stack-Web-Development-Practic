import { useState } from "react";
import {useNavigate } from 'react-router-dom'

function Form() {

  const navigator = useNavigate();

  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null,
  })

  const users = localStorage.setItem('user', userData) || []
  

  function handleNavigator(){
    navigator('/')
  }
  return (
   <>
   <h1 className="text-2xl font-bold text-center p-2">Data Form</h1>
    <div className="flex justify-center items-center flex-col gap-2">
      <label htmlFor="name" > Full Name
        <input type="text" id="name" placeholder="Enter Your FullName" onKeyUp={() => {}} />
      </label>
      <label htmlFor="email"> Email
        <input type="text" id="email" placeholder="Enter Your Email" onKeyUp={()=> {}} />
      </label>
      <label htmlFor="password"> Password
        <input type="text" id="password" placeholder="Enter Your Password" onKeyUp={() => {}} />
      </label>
      <button onClick={handleNavigator}>Submit</button>
    </div>
   </>
  );
}

export default Form;
