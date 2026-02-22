import React from 'react'
import { useNavigate } from 'react-router-dom'
function Product() {

  let nav = useNavigate()

  function changeID(id){
    console.log(id)
    nav(`/product/${id}`)
  }
    
  return (
    <div className='product'>
      <button onClick={()=>{changeID(1)}}>Product 1</button>
      <button onClick={()=>{changeID(2)}}>Product 2</button>
      <button onClick={()=>{changeID(3)}}>Product 3</button>
      <button onClick={()=>{changeID(4)}}>Product 4</button>
    </div>
  )
}

export default Product
