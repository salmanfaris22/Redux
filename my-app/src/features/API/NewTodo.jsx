import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input:"",
    edit:false,
    todos :  []
}


export const newTodoSlice = createSlice({
    name:"newtodo",
    initialState,
    reducers : {
        Getinput :(state,actions)=>{
                state.input = actions.payload
                
        },
        TodoonSumbmit:(state)=>{
            state.todos = [...state.todos,state.input]

            state.input = ""
        },
        TodoDelete :(state,actions)=>{
          
            state.todos = [...state.todos.filter((e,i)=>i!==actions.payload)]
        },
        TodoEdit:(state,actions)=>{
            const iteam = state.todos.filter((e,i)=> i===actions.payload)
            state.input = iteam
            state.edit =actions.payload
        },
        editedAddTodo:(state,acion)=>{
            state.todos[state.edit] = state.input
        }
    }


})

export default newTodoSlice.reducer

export const {Getinput,TodoonSumbmit,TodoDelete,TodoEdit,editedAddTodo} = newTodoSlice.actions