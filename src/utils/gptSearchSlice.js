import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gptSearch",
    initialState:{
        searchResults:null
    },
    reducers:{
        addResults:(state,action)=>{
            state.searchResults=action.payload
        }
    }
})
export default gptSearchSlice.reducer
export const {addResults}=gptSearchSlice.actions