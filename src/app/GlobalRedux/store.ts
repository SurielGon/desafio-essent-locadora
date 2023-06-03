'use client'

import { configureStore } from "@reduxjs/toolkit"
import userReducer from './user/userSlice'

export const store = configureStore({
    reducer: {
        loggedUser: userReducer
    },    
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch