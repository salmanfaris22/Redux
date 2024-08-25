import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "../features/counterSlice";
import  FromSlice  from "../features/FromSlice";
import  productFetchslice  from "../features/ProductfetchSlice";







export const store = configureStore({
    reducer:{
        counter : counterSlice,

        from:FromSlice,
        product:productFetchslice
   

    }
})