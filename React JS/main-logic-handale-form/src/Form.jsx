import React from "react";

function Form() {
  return (
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
      <button>Submit</button>
    </div>
  );
}

export default Form;
