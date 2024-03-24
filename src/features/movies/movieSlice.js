import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from '../../MovieAPI';
import axios from "axios";
export const fetchAsyncThunk = createAsyncThunk('movies/fetchAsyncThunk', async ()=>{
    try {
        const response = await MovieAPI({
            url: "/comments",
            method: "GET"
        })
        return response?.data
    } catch (error) {
        console.log("error", error);
        return error
    }
})
export const fetchAsyncThunkDetails = createAsyncThunk('movies/fetchAsyncThunkDetails', async (id)=>{
    try {
        const response = await MovieAPI({
            url: `/comments/${id}`,
            method: "GET"
        })
        return response?.data
    } catch (error) {
        console.log("error", error);
        return error
    }
})
// console.log("fetchAsyncThunk", fetchAsyncThunk);
const initalState={
    moviesState:[],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
}
const movieSlice = createSlice({
    name: "movies",
    initialState: initalState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAsyncThunk.pending,(state)=>{
            console.log("pending");
            state.status = 'loading';
        })
        .addCase(fetchAsyncThunk.fulfilled,(state, {payload})=>{
            state.moviesState= payload;
             state.status = 'success'; 
        })
        .addCase(fetchAsyncThunkDetails.fulfilled,(state, {payload})=>{
            state.moviesState= payload;
             state.status = 'success'; 
        })
        .addCase(fetchAsyncThunk.rejected,(state, action)=>{
            console.log("rejected");
            state.status = 'failed';
            state.error = action.error.message;
        })
    },
});

// export const {addMovies} = movieSlice.actions;
// export const getAllMovies = (state)=> state.movieReducers.moviesState;
export default movieSlice.reducer;
