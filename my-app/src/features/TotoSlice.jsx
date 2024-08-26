import { createSlice } from "@reduxjs/toolkit";
import { submit } from "./FromSlice";



const initialState ={
    input: "",
    todos : ["dad"]
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
         
         
        }
    }

})


export const {inputTodo ,sumbitTodo} =AddTodoSlice.actions
export default AddTodoSlice.reducer