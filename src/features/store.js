import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "./movies/movieSlice";
import cartReducers from "./cart/cartSlice"

export const store = configureStore({
    reducer:{
        moviestest:movieReducers,
        carttest:cartReducers
    }
})
