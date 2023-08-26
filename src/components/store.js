import { configureStore } from "@reduxjs/toolkit";
import { loggedSlice } from "./slice";

export default configureStore({
    reducer : {
        logged : loggedSlice
    }
})