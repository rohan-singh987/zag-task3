"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
    },
]

const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers:{
        addDetail: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addDetail} = chartSlice.actions;
export default chartSlice.reducer;