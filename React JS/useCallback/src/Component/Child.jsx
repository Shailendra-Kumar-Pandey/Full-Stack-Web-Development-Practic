import React from 'react'

const Child = React.memo(({name, handleClick, value}) => {  
    console.log("This is Child...")
    return (
        <>
            <>
                <button style={{textAlign:"center", fontSize:"30px"}} onClick={handleClick}>{name}</button> 
                <p>Value: {value}</p>
                {/* using React.memo to prevent unnecessary re-renders but in this case, it's not needed since the handleClick function is passed as a prop component with the same reference */}
            </>
        </>
    )
})

export default Child


// what is use in React.memo:- React.memo is a higher-order component that memoizes the result of a component function, preventing unnecessary re-renders when the component's props haven't changed.
// React.memo is used to optimize the performance of functional components by preventing unnecessary re-renders when the component's props haven't changed. It is particularly useful when a component receives complex props or when the component is expensive to render. By wrapping a component with React.memo, React will only re-render the component if its props have changed, which can improve the overall performance of the application.