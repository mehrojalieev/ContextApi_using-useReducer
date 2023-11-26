import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {}
}

const cartSlices = createSlice({
    name: "getcart",
    initialState,
    reducers: {
        "ADD_CART": (state, action) => {
            console.log(action.payload);
            state = action.payload
        }
    }
})

export const {ADD_CART} = cartSlices.actions
export const cartReducer = cartSlices.reducer