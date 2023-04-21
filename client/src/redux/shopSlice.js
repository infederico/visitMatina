import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [],
    shopId: 0
  },
  reducers: {
    getAllShops: (state, action) => {
      state.shops = action.payload
    },
    getShopIdByPath: (state, action) => {
      state.shopId = action.payload
    },
    resetShopId: (state, action) => {
      state.shopId = action.payload
    },
  },
})

export const { getAllShops, getShopIdByPath, resetShopId } = shopSlice.actions
export default shopSlice.reducer
