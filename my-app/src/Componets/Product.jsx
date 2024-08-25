import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductAPI } from '../features/API/GetApi'


const Product = () => {
  const product =useSelector((state)=>state.product)
  console.log('====================================');
  console.log(product);
  console.log('====================================');
  const dispatch = useDispatch()
  return (
    <div>
    <button onClick={()=>dispatch(GetProductAPI())}>OnClike</button>
    </div>
  )
}

export default Product