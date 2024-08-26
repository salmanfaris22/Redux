import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "../features/counterSlice";
import  FromSlice  from "../features/FromSlice";
import  productFetchslice  from "../features/ProductfetchSlice";
import  AddTodoSlice  from "../features/TotoSlice";







export const store = configureStore({
    reducer:{
        counter : counterSlice,

        from:FromSlice,
        product:productFetchslice,
        todo:AddTodoSlice

    }
})