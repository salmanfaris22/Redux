import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "../features/counterSlice";
import  FromSlice  from "../features/FromSlice";
import  productFetchslice  from "../features/ProductfetchSlice";
import  AddTodoSlice  from "../features/TotoSlice";
import  newTodoSlice  from "../features/API/NewTodo";







export const store = configureStore({
    reducer:{
        counter : counterSlice,
        todos : newTodoSlice,
        from:FromSlice,
        product:productFetchslice,
        todo:AddTodoSlice

    }
})