import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decreamnat, increament } from '../App/CounterSlice'
const Counter = () => {

   const {count} =useSelector((state)=>state.name)
    const dispatch = useDispatch()
  return (
    <div>
      <button  onClick={()=>dispatch(increament())} className='p-2 bg-blue-400'>Increment</button>
   {count}
      <button onClick={()=>dispatch(decreamnat())} className='p-2 bg-blue-400'>Decrement</button>
    </div>
  )
}

export default Counter
