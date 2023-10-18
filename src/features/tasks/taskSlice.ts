import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: 'tasks',
    initialState: 1,
    reducers: {
        incrementar: (state) => {
            return state + 1
        }
    }
})

export const {incrementar} = taskSlice.actions

export default taskSlice.reducer