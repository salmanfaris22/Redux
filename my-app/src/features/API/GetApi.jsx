import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export  const GetProductAPI = createAsyncThunk("product",async()=>{
    try{
           
            const res = await axios.get("http://localhost:3000/item")
            const product =res.data
            return product

            
    }catch(err){
        throw err
    }
}) 