import { useCallback, useState } from "react"
import Child from "./Component/Child"


function App() {


  // 1 - without useCallback, the handleClick function will be recreated on every render, which will cause the Child component to re-render unnecessarily when the count state changes.
//   const [count, setCount] = useState(0)

// console.log("This is Perent...")
 
// // function handleClick(){
// //   setCount(count + 1)
// //  }

// // using useCallback to memoize the handleClick function, so that it will not be recreated on every render and will have the same reference, which will prevent unnecessary re-renders of the Child component when the count state changes.

// const handleClick = useCallback(()=>{   
//   setCount(count+1)
// },[])

  // return (
  
    {/* <div style={{textAlign:"center", fontSize:"30px"}}>

      <h1> useCallback </h1>

      <br />
      <br />

      <button style={{textAlign:"center", fontSize:"30px"}} onClick={handleClick}> Counter : {count}</button>
      
      <br />
      <br />
      <Child name="Cickme" handleClick={handleClick} />
    </div> */}

  // 2 - using useCallback hook but note- useCallback work only function refrence stored in the memory only re-creation of the function will be prevented but if the function is using any state or props then it will be recreated on every render because the state or props will be changed on every render, so in this case, we need to add the state or props in the dependency array of the useCallback hook to prevent unnecessary re-renders of the Child component when the count state changes.

  
  


  const [count, setCount] = useState(0)
  
  console.log("This is Perent...")

  const handleClick = useCallback(()=>{  
    console.log("This is handleClick function...") 
    let result = 0;
    for(let i=0; i<1000000000; i++){
      result += i;
    }
    setCount(result+count)
  },[count])
      
  return (

    <>
        <h1>
          total count : {count}
        </h1>

        <button onClick={handleClick}>Increment</button>

        <Child name="Cickme" value={count} handleClick={handleClick} />
    </>
  )
}

export default App


// what is useCallback:- useCallback is a React hook that returns a memoized version of a callback function. It is used to optimize the performance of a component by preventing unnecessary re-renders when the callback function is passed as a prop to child components. The useCallback hook takes two arguments: the first argument is the callback function that you want to memoize, and the second argument is an array of dependencies that the callback function depends on. If any of the dependencies change, the callback function will be recreated, otherwise, it will return the same reference to the function, which can help prevent unnecessary re-renders of child components that rely on that function.

// what is use in useCallback:- The useCallback hook is used to optimize the performance of a component by preventing unnecessary re-renders when a callback function is passed as a prop to child components. When a parent component re-renders, all of its child components will also re-render, even if the props passed to them haven't changed. This can lead to performance issues, especially if the child components are expensive to render. By using useCallback, you can memoize the callback function and ensure that it only changes when its dependencies change, which can help prevent unnecessary re-renders of child components that rely on that function.

// when to use useCallback:- You should use the useCallback hook when you have a callback function that is passed as a prop to child components and you want to prevent unnecessary re-renders of those child components. This is especially important when the child components are expensive to render or when the callback function is used in a dependency array of another hook, such as useEffect or useMemo. By using useCallback, you can ensure that the callback function only changes when its dependencies change, which can help improve the performance of your application.

// when not to use useCallback:- You should not use the useCallback hook when the callback function is not passed as a prop to child components or when the callback function does not have any dependencies that would cause it to change. In these cases, using useCallback would add unnecessary complexity to your code without providing any performance benefits. Additionally, if the callback function is simple and does not have any expensive computations, it may not be worth memoizing with useCallback, as the overhead of memoization may outweigh the benefits.

// what is React.memo:- React.memo is a higher-order component that memoizes the result of a component function, preventing unnecessary re-renders when the component's props haven't changed. It is used to optimize the performance of functional components by preventing unnecessary re-renders when the component's props haven't changed. By wrapping a component with React.memo, React will only re-render the component if its props have changed, which can improve the overall performance of the application.

// when to use React.memo:- You should use React.memo when you have a functional component that receives props and you want to prevent unnecessary re-renders of that component when the props haven't changed. This is especially important when the component is expensive to render or when it receives complex props that may not change frequently. By using React.memo, you can ensure that the component only re-renders when its props have changed, which can help improve the performance of your application.

// when not to use React.memo:- You should not use React.memo when the component does not receive any props or when the props received by the component are simple and do not have any expensive computations. In these cases, using React.memo would add unnecessary complexity to your code without providing any performance benefits. Additionally, if the component is already optimized and does not have any performance issues, it may not be worth memoizing with React.memo, as the overhead of memoization may outweigh the benefits.


