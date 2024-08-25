import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name : "",
    age:0
}



export const FromSlice = createSlice({
   name:"from",
 initialState,
  reducers:{
        submit: (state,action)=>{
             state.name  = action.payload.inputName
             state.age = action.payload.inputAge

          

        }
  }
})


export default FromSlice.reducer

export const {submit} = FromSlice.actions