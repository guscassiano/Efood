import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import modalReducer from './reducers/modal'
import dataModal from './reducers/data'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    data: dataModal,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
