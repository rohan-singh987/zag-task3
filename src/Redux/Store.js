import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./ChartSlice";


// Creating Store at global level using Redux
const store = configureStore({
    reducer:{
        chart : ChartSlice,
    }
})

export default store