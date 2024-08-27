import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletBtn, editBtn, editedBtn, inputTodo, sumbitTodo } from '../features/TotoSlice'

const About = () => {

    const {todos,input,edit}  = useSelector((state)=>state.todo)
    const dispathc= useDispatch()

  return (
    <div  className='mt-7 flex flex-col justify-normal ml-10 gap-10'>
        <input  value={input}  onChange={(e)=>dispathc(inputTodo(e.target.value))} className='p-3 border border-black' type="text" />
       {edit === Number(edit) ?
        <button onClick={()=>dispathc(editedBtn())} className='bg-red-400 rounded-lg font-bold text-white p-5'>Edit</button>

       : <button onClick={()=>dispathc(sumbitTodo())} className='bg-blue-400 rounded-lg font-bold text-white p-5'>Add Todo</button>
    }
       
        {todos.map((e,i)=>{
            return (
                <div key={i}  className='w-[400px]  justify-between bg-gray-100 flex  items-center p-3'>{e}
               <div>
               <button className='bg-green-400 p-1 ml-1' onClick={()=>dispathc(editBtn(i))}>Edit</button>
               <button className='bg-red-400 p-1' onClick={()=>dispathc(deletBtn(e,i))}>Delet</button>
               </div>
               

                </div>
            )
        })}
    </div>
  )
}

export default About