import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [],
    shopId: 0,
    shopData: {},
    resCrateShop: "",
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
    resPostShop: (state, action) =>{
      window.alert(action.payload)
    },
  },
})

export const { getAllShops, getShopIdByPath, resetShopId, getShopDataByPath, resetShopData, resPostShop } = shopSlice.actions
export default shopSlice.reducer
