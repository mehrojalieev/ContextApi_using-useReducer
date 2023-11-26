import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth: null
}

const authSlices = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        "AUTH": (state, action) => {
            console.log(action);
            state.auth = action.data
            localStorage.setItem("user-token", action.data.access_token)
        }
    }
})

export const { AUTH } = authSlices.actions
export const authReducer = authSlices.reducer