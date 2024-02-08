
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import movieReducers from "./moviesSlice"
const appStore=configureStore({
    reducer:{
        user:userSlice,
        movie:movieReducers

    }
})
export default appStore