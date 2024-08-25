import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProductAPI = createAsyncThunk("product", async () => {
  try {
    const res = await axios.get("http://localhost:3000/item");

    const product = res.data;

    const res2 = await axios.get("http://localhost:3000/user/1");
    const cart = Object.values(res2.data.cart);

    return { product, cart };
  } catch (err) {
    throw err;
  }
});

export const cartSetItem = async (data) => {
  try {
    const res = await axios.get("http://localhost:3000/user/1");
    const product = res.data.cart;
 
    const updatecart = {
      ...product,
      [data.id]: {
        qty:0,
        ...data
      },
    };

      await axios.patch("http://localhost:3000/user/1", { cart: updatecart });
    
  } catch (err) {
    throw err;
  }
};

export const cartRemoveItem = async (data) => {
    try {
      const res = await axios.get("http://localhost:3000/user/1");
      const product = res.data.cart
          console.log("gg");
      const {[data.id]:Remove,...updatecart} =product
     
        await axios.patch("http://localhost:3000/user/1", { cart: updatecart });
      
    } catch (err) {
      throw err;
    }
  };
  export const AddQty = async (data) => {
    try {
        const res = await axios.get("http://localhost:3000/user/1");
        const product = res.data.cart;
     
        const {[data.id]:Remove,...updatecart} =product
  
       
        
      } catch (err) {
        throw err;
      }
  }; 
  
