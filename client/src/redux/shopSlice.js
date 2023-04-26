import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [],
    shopId: 0,
    shopData: {},
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
    getShopDataByPath: (state, action) => {
      state.shopData = action.payload
    },
    resetShopData: (state, action) => {
      state.shopData = action.payload
    },
  },
})

export const { getAllShops, getShopIdByPath, resetShopId, getShopDataByPath, resetShopData } = shopSlice.actions
export default shopSlice.reducer
