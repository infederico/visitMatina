import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { getAllProductsByShopId } = productSlice.actions
export default productSlice.reducer
