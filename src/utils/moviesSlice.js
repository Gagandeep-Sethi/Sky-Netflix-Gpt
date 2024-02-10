import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        featuringMovie:null,
        popular:null,
        topRated:null,
        upcoming:null,
        moviesDetail:null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.nowPlaying=action.payload
        },
        addFeaturingMovie:(state,action)=>{
            state.featuringMovie=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popular=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRated=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcoming=action.payload
        },
        addMovieDetails:(state,action)=>{
            state.moviesDetail=action.payload
        }
    }
})
export default moviesSlice.reducer
export const {addMovies,addFeaturingMovie,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addMovieDetails}=moviesSlice.actions