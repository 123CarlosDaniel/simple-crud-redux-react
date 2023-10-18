import { createSlice } from "@reduxjs/toolkit";

const initialStateStr = localStorage.getItem("id")
const initialState = initialStateStr ? JSON.parse(initialStateStr) : {id: 0}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.id += 1
            localStorage.setItem("id", JSON.stringify(state))
        }
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer