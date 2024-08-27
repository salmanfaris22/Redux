import { createSlice } from "@reduxjs/toolkit";
import { submit } from "./FromSlice";



const initialState ={
    input: "",
    todos : ["dad"],
    edit:false
}

export const AddTodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        inputTodo : (state,action)=>{
             state.input=action.payload
        },
        sumbitTodo :(state)=>{
           if( state.input.length>=1){
           state.todos = [...state.todos,state.input]
          state.input=""
           }
        },
        deletBtn : (state,action)=>{
       
            state.todos = [...state.todos.filter((e,i)=>  i !== action.payload)]
        },
        editBtn:(state,action)=>{
            state.input = state.todos[action.payload]
            state.edit = action.payload
        },
        editedBtn:(state,action)=>{
           
          
            state.todos[state.edit] = state.input 
            state.input= ""
            state.edit = false
        }
    }

})


export const {inputTodo ,sumbitTodo,deletBtn,editBtn,editedBtn} =AddTodoSlice.actions
export default AddTodoSlice.reducer