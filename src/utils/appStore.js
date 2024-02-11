
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import movieReducers from "./moviesSlice"
import gptReducers from "./gptSearch"
const appStore=configureStore({
    reducer:{
        user:userSlice,
        movie:movieReducers,
        gpt:gptReducers,

    }
})
export default appStore