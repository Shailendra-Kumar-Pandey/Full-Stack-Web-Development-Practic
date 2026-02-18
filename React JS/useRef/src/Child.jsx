
import React from 'react'
import { useRef } from 'react';

const Child = () => {
    
    let ele = useRef("")

    // console.log(ele)
    function dom(){
        ele.current.style.backgroundColor = "yellow"
        ele.current.value = "Kya Haal Hai"

    }
  
    return (
    <div>
      <input type="text" ref={ele} placeholder="Enter Name"  />

      <button onClick={dom}>Style</button>
    </div>
  )
}

export default Child;
