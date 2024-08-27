import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editedAddTodo, Getinput, TodoDelete, TodoEdit, TodoonSumbmit } from '../features/API/NewTodo'

const NewTodo = () => {
    const {todos,input} = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
  return (
    <div>
      <input value={input}  onChange={(e)=>dispatch(Getinput(e.target.value))} type="text" className='border border-black p-1' />
      <button className='bg-blue-500' onClick={()=>dispatch(TodoonSumbmit())}>ADD TODO</button>
      <button className='bg-blue-800 ml-3' onClick={()=>dispatch(editedAddTodo())}>Edit</button>
      <div>
        {todos.map((e,i)=>{
            return <div key={i} className='bg-slate-100 mt-1 p-1 shadow-md rounded-lg'>
                {e}
                <button  className='bg-red-300' onClick={()=>dispatch(TodoDelete(i))}>Delete</button>
                <button  className='bg-green-300' onClick={()=>dispatch(TodoEdit(i))}>Edit</button>
            </div>
        })}
      </div>
    </div>
  )
}

export default NewTodo
