// redux use cheythattt api fetching cheyuna steps aanu ethil cheyanath
// npm i axios enulla command koduth axios install cheyanam terminal il ennit venam thazhe ullath type cheyan

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// asynchronous action should be dispatched by product component

export const getAllProducts = createAsyncThunk('product/getAllProducts',async()=>{
    const response = await axios.get('https://dummyjson.com/products')
    console.log(response);
    return response.data.products

})

const productSlice = createSlice({
    name:'products',
    initialState:{
        loading:true,
        allProducts:[],
        error:''
    },
    reducers:{
        // actions - search,
    },
    extraReducers:(builder)=>{
        //action - promise implementation,

        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
          state.allProducts = action.payload
          state.loading = false
          state.error = ''
        })

        builder.addCase(getAllProducts.pending,(state,action)=>{
          state.allProducts = []
          state.loading = true
          state.error = ''
        })

        builder.addCase(getAllProducts.rejected,(state,action)=>{
          state.allProducts = []
          state.loading = false
          state.error = 'API call failed'
        })
    }
    
})

export default productSlice.reducer