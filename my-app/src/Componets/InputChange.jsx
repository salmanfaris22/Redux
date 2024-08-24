import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const InputChange = () => {

    const input = useSelector((state)=>state.input)
const dispatch = useDispatch()

  return (
    <div>
        <h1>{input}</h1>
        <input type="text" 
        onChange={(e)=>dispatch({
            type:e.target.value
        })}
        
    />
    <button 
    onClick={dispatch({
        type:"dd"
    })}
    >OnSubmit</button>
    </div>
  )
}

export default InputChange