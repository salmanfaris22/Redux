import { createSlice } from "@reduxjs/toolkit";
import { GetProductAPI } from "./API/GetApi";

const initialState ={
    loading : false,
    product : [],
    error : null,
}

export const productFetchslice = createSlice({
      name:"product",
      initialState,
      extraReducers:(builder)=>{
        builder
            .addCase(GetProductAPI.pending,(state)=>{
                state.loading =true
            })
            .addCase(GetProductAPI.fulfilled,(state,action)=>{
                state.loading =false
                state.product =action.payload
            })
            .addCase(GetProductAPI.rejected,(state,action)=>{
                state.loading = false
                state.error =action.payload
            })

      }
})


export default productFetchslice.reducer































// import { createSlice } from "@reduxjs/toolkit";




// import axios from "axios"

// import { createAsyncThunk } from '@reduxjs/toolkit'
 

// const productAPI = "http://localhost:3000/item"

// export const getProduct =createAsyncThunk("product",  async()=>{
//     try{
//         const res = await axios.get(productAPI)
//         const product = res.data
//         return product
//     }catch(err){
//        throw err;
//     }
// })


// const initialState = {
//     user:[],
//     loading:false,
//     error:null,
// }


// export const productFetchslice = createSlice({
//         name:"product",
//         initialState,
//         extraReducers:(builder)=>{
//             builder
//                 .addCase(getProduct.pending,(state)=>{
//                     state.loading  =  true
//                 })
//                 .addCase(getProduct.fulfilled,(state,action)=>{
//                     state.loading =false 
//                     state.user = action.payload
//                 })
//                 .addCase(getProduct.rejected,(state,action)=>{
//                     state.loading=false
//                     state.error = action.payload
//                 })
//         }

// })


// export default productFetchslice.reducer



