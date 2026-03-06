import { useForm } from 'react-hook-form';

function App() {
  
  const {register, handleSubmit} = useForm()
  
  function onSubmit(data){
    console.log(data)
  }

  return (
    <>
    <div className='flex justify-center items-center'>
      <h1 className="font-bold p-4">React Hook Form</h1>      
    </div>
    <form className='bg-sky-400 w-full h-1/2'  onSubmit={handleSubmit(onSubmit)}>
      <input type="id" name="id" id="id" />
      <input type="text" name="name" id="name" />
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <button type="submit">submit</button>
    </form>
    </>
  )
}

export default App
