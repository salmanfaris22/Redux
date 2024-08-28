import React from 'react'
import { useSelector } from 'react-redux'

function Color() {
    const {color} =useSelector((state)=>state.name)
  return (
    <div className='h-[300px] w-[300px]' style={{background:color}}>
      
    </div>
  )
}

export default Color
