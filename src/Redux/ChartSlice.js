"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        name: "Jane Cooper",
        company: "Microsoft",
        no : "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
    },
    {
        id:2,
        name: "Floyd Miles",
        company: "Yahoo",
        no : "(225) 555-0100",
        email: "floyd@yahoo.com",
        country: "Kiribati",
        status: "Inactive",
    },
    {
        id:3,
        name: "Ronald Richards",
        company: "Adobe",
        no : "(225) 555-0107",
        email: "ronald@adobe.com",
        country: "Israel",
        status: "Inactive",
    },
    {
        id:4,
        name: "Marvin McKinney",
        company: "Tesla",
        no : "(225) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active",
    },
    {
        id:5,
        name: "Jerome Bell",
        company: "Google",
        no : "(225) 555-0129",
        email: "jerome@google.com",
        country: "Réunion",
        status: "Active",
    },
    {
        id:6,
        name: "Kathryn Murphy",
        company: "Microsoft",
        no : "(406) 555-0120",
        email: "kathryn@microsoft.com",
        country: "Curaçao",
        status: "Active",
    },

    {
        id:2,
        name: "Floyd Miles",
        company: "Yahoo",
        no : "(225) 555-0100",
        email: "floyd@yahoo.com",
        country: "Kiribati",
        status: "Inactive",
    },
    {
        id:4,
        name: "Marvin McKinney",
        company: "Tesla",
        no : "(225) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active",
    },
    {
        id:1,
        name: "Jane Cooper",
        company: "Microsoft",
        no : "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
    },
    {
        id:3,
        name: "Ronald Richards",
        company: "Adobe",
        no : "(225) 555-0107",
        email: "ronald@adobe.com",
        country: "Israel",
        status: "Inactive",
    },
    {
        id:6,
        name: "Kathryn Murphy",
        company: "Microsoft",
        no : "(406) 555-0120",
        email: "kathryn@microsoft.com",
        country: "Curaçao",
        status: "Active",
    },
    {
        id:5,
        name: "Jerome Bell",
        company: "Google",
        no : "(225) 555-0129",
        email: "jerome@google.com",
        country: "Réunion",
        status: "Active",
    },
    {
        id:1,
        name: "Jane Cooper",
        company: "Microsoft",
        no : "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
        status: "Active",
    },
    {
        id:2,
        name: "Floyd Miles",
        company: "Yahoo",
        no : "(225) 555-0100",
        email: "floyd@yahoo.com",
        country: "Kiribati",
        status: "Inactive",
    },
    {
        id:3,
        name: "Ronald Richards",
        company: "Adobe",
        no : "(225) 555-0107",
        email: "ronald@adobe.com",
        country: "Israel",
        status: "Inactive",
    },
    {
        id:4,
        name: "Marvin McKinney",
        company: "Tesla",
        no : "(225) 555-0126",
        email: "marvin@tesla.com",
        country: "Iran",
        status: "Active",
    },
    {
        id:5,
        name: "Jerome Bell",
        company: "Google",
        no : "(225) 555-0129",
        email: "jerome@google.com",
        country: "Réunion",
        status: "Active",
    },
    {
        id:6,
        name: "Kathryn Murphy",
        company: "Microsoft",
        no : "(406) 555-0120",
        email: "kathryn@microsoft.com",
        country: "Curaçao",
        status: "Active",
    },
    
]

// Creating Chart Slice to manage Chart related state at global level
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