import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}


const cartSlices = createSlice({
    name: "getcart",
    initialState,
    reducers: {
        "ADD_CART": (state, action) => {
            state.cart = action.cart_data 
        }
    }
})


export const {ADD_CART} = cartSlices.actions
export const cartReducer = cartSlices.reducer