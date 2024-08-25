import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submit } from '../features/FromSlice'

const From = () => {
const {name,age} =useSelector((satat)=>satat.from)
const [inputName,setInputName ] =useState("")
const [inputAge,setInputAge ] =useState(0)
const dispatch =useDispatch()

  return (
    <div>
        name : {name}   | age : {age}
        <input type="text"  value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
        <input type="number"  value={inputAge} onChange={(e)=>setInputAge(e.target.value)}/>
        <button onClick={()=>dispatch(submit({inputName,inputAge}))}>Submit</button>
    </div>
  )
}

export default From