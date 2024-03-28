import { createSlice } from '@reduxjs/toolkit'

type DataState = {
  isDataOpen: boolean
  isPaymentAreaOpen: boolean
  isSuccessMessage: boolean
}

const initialState: DataState = {
  isDataOpen: false,
  isPaymentAreaOpen: false,
  isSuccessMessage: false
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    openDataItem: (state) => {
      state.isDataOpen = true
    },
    closeDataItem: (state) => {
      state.isDataOpen = false
    },
    openPaymentArea: (state) => {
      state.isPaymentAreaOpen = true
    },
    closePaymentArea: (state) => {
      state.isPaymentAreaOpen = false
    },
    openSuccessMessage: (state) => {
      state.isSuccessMessage = true
    },
    finishOrder: (state) => {
      state.isDataOpen = false
      state.isPaymentAreaOpen = false
      state.isSuccessMessage = false
    }
  }
})

export const {
  openDataItem,
  closeDataItem,
  openPaymentArea,
  closePaymentArea,
  openSuccessMessage,
  finishOrder
} = dataSlice.actions
export default dataSlice.reducer
