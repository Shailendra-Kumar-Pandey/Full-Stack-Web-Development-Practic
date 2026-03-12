import React from 'react'
import { useForm } from "react-hook-form";


function Form({onNavigate}) {
     const { register, handleSubmit, formState: { errors } } = useForm();

  function outputData(data) {
    console.log(data);
    onNavigate()
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold p-4">React Hook Form</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <form className="bg-sky-400 w-full " onSubmit={handleSubmit(outputData)}>
          <label >ID</label>
          <input placeholder="Enter Vailid ID" {...register('id', {required:true, maxLength:10})} />

          {errors.id && <span style={{color:'red'}}>This field is required</span>}

          <label >Full Name</label>
          <input placeholder="Enter Full Name" {...register('name',{required:true})}
          />
          {errors.name && <span style={{color:'red'}}>This field is required</span>}

          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter Email Address"
            {...register('email',{required:true})}
          />
          {errors.email && <span style={{color:'red'}}>This field is required</span>}

          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter Your Password"
            {...register('password', {required:true})}
          />
          {errors.password && <span style={{color:'red'}}>This field is required</span>}

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
