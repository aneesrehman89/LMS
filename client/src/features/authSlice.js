import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isAuthenticated:false,  // for protected routing
};

// creating reducer and making slice for authentication loginIn/signUp
const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
            userLoggedIn: (state, action) =>{
                 state.user = action.payload.user;      // user object {"name": "anees"}
                 state.isAuthenticated = true;
            },
            userLoggedOut: (state) =>{
                state.user = null;
                state.isAuthenticated = false
           }
    }
})

export const {userLoggedIn, userLoggedOut } = authSlice.actions
export default authSlice.reducer