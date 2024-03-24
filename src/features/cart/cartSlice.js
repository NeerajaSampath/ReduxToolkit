import { createSlice } from "@reduxjs/toolkit";
const initalValue = {
    cartState:0,
    LoginPayload: {
        username: "",
        password: "",
        IsAuth: false
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initalValue,
    reducers:{
        addCart: (state)=>{
           state.cartState += 1;
        },
        removeCart: (state)=>{
            state.cartState -= 1;
        },
        InputOnchange: (state, {payload})=>{
            state.LoginPayload ={
                ...payload,
                IsAuth: true
            }
            console.log(" state.LoginPayload",  state.LoginPayload);
        },
        LogOutFunction:(state, {payload})=>{
            state.LoginPayload.IsAuth = {
                ...payload,
                IsAuth: false
            }
        }
    }
});

export const { addCart, removeCart, InputOnchange, LogOutFunction } = cartSlice.actions;
export default cartSlice.reducer;