import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlices = createSlice({
    name: "getcart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.cart = [...state.cart, action.payload]
        }
    }
})

export const {addToCart} = cartSlices.actions
export const cartReducer = cartSlices.reducer