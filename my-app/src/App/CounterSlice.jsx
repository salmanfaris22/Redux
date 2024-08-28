

// import { createSlice, } from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";


// const initiolState = {
//     counter : 0
// }

// export const cpunterSlice =  createSlice({
//     name:"counter",
//     initiolState
//     // reducer:(state)=>{

//     // }
// })


// export default cpunterSlice.reducer

const initialState = {
    count : 0,
    color:""
}
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament:(state)=>{
            state.count = state.count+1
            if(state.count%3===0){
                state.color = "red"
            }else{
                state.color = ""
            }

        },
        decreamnat:(state)=>{
            state.count = state.count-1
            if(state.count%3===0){
                state.color = "red"
            }else{
                state.color = ""
            }
        }
    }

})

export default counterSlice.reducer

export const {increament,decreamnat} = counterSlice.actions