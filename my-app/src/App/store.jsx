import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "../features/counterSlice";
import  FromSlice  from "../features/FromSlice";




export const store = configureStore({
    reducer:{
        counter : counterSlice,
        from:FromSlice

    }
})