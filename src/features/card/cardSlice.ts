import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Card {
    id?: number
    title: string
    description: string
}

const cardsStr = localStorage.getItem("cards")

const cards = cardsStr ? JSON.parse(cardsStr) : [] 

const cardSlice = createSlice({
    name: 'card',
    initialState: cards as Card[],
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.push(action.payload) 
            localStorage.setItem("cards", JSON.stringify(state))
        },
        deleteCard: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(card => card.id === action.payload)
            state.splice(index, 1)
            localStorage.setItem("cards", JSON.stringify(state))
        },
        updateCard: (state, action: PayloadAction<Card>) => {
            const index = state.findIndex(card => card.id === action.payload.id)            
            state[index] = action.payload
            localStorage.setItem("cards", JSON.stringify(state))
        }
    },
})

export const { addCard, deleteCard, updateCard } = cardSlice.actions
export default cardSlice.reducer
