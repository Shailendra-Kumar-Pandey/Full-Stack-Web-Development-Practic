import React from "react";

function Form() {
  return (
    <div>
      <input type="text" placeholder="Enter Your FullName" onKeyUp={() => {}} />
      <input type="text" placeholder="Enter Your Email" onKeyUp={()=> {}} />
      <input type="text" placeholder="Enter Your Password" onKeyUp={() => {}} />
      <button>Submit</button>
    </div>
  );
}

export default Form;
