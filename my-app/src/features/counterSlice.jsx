import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value : 0,
    value2 : 2
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrment :(state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        incrment5 :(state)=>{
            state.value2 += 5
        },
    }
})

export default counterSlice.reducer
export const {incrment , decrement, incrment5} =counterSlice.actions
