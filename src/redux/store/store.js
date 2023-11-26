import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlices";
import { cartReducer } from "../slices/cartSlices";

const store = configureStore({
    reducer: {
        auth_data: authReducer,
        cart_data: cartReducer
    }
})


export { store }