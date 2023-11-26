import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlices";

const store = configureStore({
    reducer: {
        auth_data: authReducer
    }
})


export {store}