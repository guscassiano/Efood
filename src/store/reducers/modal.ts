import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    openModalItem: () => true,
    closeModalItem: () => false
  }
})

export const { openModalItem, closeModalItem } = modalSlice.actions
export default modalSlice.reducer
