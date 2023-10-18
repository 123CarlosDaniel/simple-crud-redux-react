import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice'
import counterReducer from '../features/counter/counterSlice'
import cardsReducer from '../features/card/cardSlice'

export const store = configureStore({
    reducer: {
        task: taskReducer,
        counter: counterReducer,
        cards: cardsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>