import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.product = action.payload
    },
  },
})

export const { getAllProductsByShopId } = productSlice.actions
export default productSlice.reducer
