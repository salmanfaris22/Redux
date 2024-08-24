
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrment, incrment5 } from '../features/counterSlice';


const InputChange = () => {

    const {value,value2} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

  return (
    <div>
      {value}

      <button onClick={()=>dispatch(incrment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>

      {value2}
      <button onClick={()=>dispatch(incrment5())}>Increment</button>
    </div>
  )
}

export default InputChange