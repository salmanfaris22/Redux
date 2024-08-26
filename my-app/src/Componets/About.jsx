import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputTodo, sumbitTodo } from '../features/TotoSlice'

const About = () => {

    const {todos,input}  = useSelector((state)=>state.todo)
    const dispathc= useDispatch()
console.log(input);
  return (
    <div  className='mt-7 flex flex-col justify-normal ml-10 gap-10'>
        <input  value={input}  onChange={(e)=>dispathc(inputTodo(e.target.value))} className='p-3 border border-black' type="text" />
       
        <button onClick={()=>dispathc(sumbitTodo())} className='bg-blue-400 rounded-lg font-bold text-white p-5'>Add Todo</button>

        {todos.map((e,i)=>{
            return (
                <div key={i}  className='w-[400px] bg-gray-100 flex  items-center p-3'>{e}</div>
            )
        })}
    </div>
  )
}

export default About