import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // actions - add to cart, remove cart, increment cart, decrement cart, empty cart

        addToCart:(state,action)=>{
            const existingItem = state.find(item=>item.id==action.payload.id)
            if(existingItem){

                // quantity increment, price updating
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity

            }else{

                // evide payload il quantity and total peice um illa sp nammall spread method use cheythott athine add cheyunu
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price});
            }
            
        },

        deleteItem:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        },

        incrementCart:(state,action)=>{
          const existingItem = state.find(item=>item.id==action.payload.id)

          if(existingItem){

                // quantity increment, price updating
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity

            }
        },
        
        decrementCart:(state,action)=>{
          const existingItem = state.find(item=>item.id==action.payload.id)

          if(existingItem){
                if(existingItem && existingItem.quantity>1)
                // quantity increment, price updating
                existingItem.quantity -= 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity

            }
        },

        emptyCart:(state)=>{
            return []
        }



    }
})

export const{addToCart,deleteItem,incrementCart,decrementCart,emptyCart} = cartSlice.actions

export default cartSlice.reducer