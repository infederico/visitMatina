import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { getAllProducts } = productSlice.actions
export default productSlice.reducer
