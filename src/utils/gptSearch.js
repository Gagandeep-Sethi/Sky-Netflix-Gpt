import { createSlice } from "@reduxjs/toolkit";

const gptSearch=createSlice({
    name:"gptSearch",
    initialState:{
        btnEnable:true
    },
    reducers:{
        setBtnEnable:(state)=>{
            state.btnEnable=(!state.btnEnable)
        }
    }
})
export default gptSearch.reducer
export const {setBtnEnable}=gptSearch.actions