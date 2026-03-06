import React from 'react'
import { useForm } from "react-hook-form";


function Form() {
     const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold p-4">React Hook Form</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <form className="bg-sky-400 w-full " onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="id">ID</label>
          <input 
            type="id"
            name="id" 
            id="id" 
            placeholder="Enter Vailid ID"
            {...register('id')}
          />
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full Name"
            {...register('name')}

          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            {...register('email')}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            {...register('password')}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
