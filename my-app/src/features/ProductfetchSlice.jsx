import { createSlice } from "@reduxjs/toolkit";
import {  AddQty, cartRemoveItem, cartSetItem,  checkOutcart,  GetProductAPI } from "./API/GetApi";


const initialState ={
    loading : false,
    product : [],
    error : null,
    cart:[],
    totel:0
    
}

export const productFetchslice = createSlice({
      name:"product",
      initialState,
      extraReducers: (builder) => {
        // Existing cases
        builder
            .addCase(GetProductAPI.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetProductAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload.product;
                state.cart =action.payload.cart
                state.totel = state.cart.reduce((acc,e)=>e.qtyPrice+acc,0)
               
            })
            .addCase(GetProductAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    
    }
    
     
     
     
     ,
      reducers:{
        AddTocart :(state,action)=>{
            const item = {...action.payload,qty:1,qtyPrice : action.payload.price}
         
            const extingitem =  state.cart.find((e)=>e.id===item.id)
            if(!extingitem){
            
                 cartSetItem(item)
                state.cart.push(item)
            }
            state.totel = state.cart.reduce((acc,e)=>e.qtyPrice+acc,0)
         },
        removeCart: (state,action)=>{
            const item =action.payload
            cartRemoveItem(item)
            state.cart = state.cart.filter((e)=>e.id !== item.id)
            state.totel = state.cart.reduce((acc,e)=>e.qtyPrice+acc,0)
             
        },
        addQty:(state,action)=>{
            const item =action.payload
            state.cart= state.cart.map(e => 
                e.id === item.id 
                ? { ...item, qty: e.qty + 1 ,qtyPrice:e.qtyPrice+e.price} 
                : e
            )
            state.totel = state.cart.reduce((acc,e)=>e.qtyPrice+acc,0)
            AddQty(state.cart)
        },
        removeQty:(state,action)=>{
         
            state.cart = state.cart.map(e=>
                e.id === action.payload.id 
                ? {...action.payload,qty:e.qty-1,qtyPrice:e.qtyPrice - e.price}
                : e
            )
            state.totel = state.cart.reduce((acc,e)=>e.qtyPrice+acc,0)
            AddQty(state.cart)
        },
        checkOut :(state)=>{
            checkOutcart()
            state.cart = []
            state.totel = 0
        }
      }
})


export default productFetchslice.reducer
export const {AddTocart,removeCart,addQty,removeQty,checkOut} =productFetchslice.actions






























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



