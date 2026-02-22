import React from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {

  let {id} = useParams();
  console.log(id)
  return (
    <div style={{padding: '10px', fontSize: '30px', color:'white'}}>
      <h1>SingleProduct : {id}</h1>
    </div>
  )
}

export default SingleProduct;
