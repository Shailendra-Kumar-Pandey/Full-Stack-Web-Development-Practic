import { useState } from "react";

// Custom Hook:- A custom hook for managing a mathematical problem with increment, decrement, and reset functionality using React's useState hook.

export const useMathProblem = (initialValue = 0)=>{

    let [count, setCount] = useState(initialValue);

    const increment = ()=> setCount(count + 1);
    
    const decrement = ()=> setCount(count - 1);

    const reset = ()=> setCount(initialValue);

    return {count, increment, decrement, reset}
}