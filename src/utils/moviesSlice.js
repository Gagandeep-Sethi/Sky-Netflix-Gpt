import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        featuringMovie:null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.nowPlaying=action.payload
        },
        addFeaturingMovie:(state,action)=>{
            state.featuringMovie=action.payload
        }
    }
})
export default moviesSlice.reducer
export const {addMovies,addFeaturingMovie}=moviesSlice.actions