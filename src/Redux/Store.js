import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./ChartSlice";

const store = configureStore({
    reducer:{
        chart : ChartSlice,
    }
})

export default store