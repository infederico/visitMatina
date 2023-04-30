import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [],
    shopsAll: [],
    shopId: 0,
    shopData: {},
    resCrateShop: "",
    resUpdateShop:"",
    resDelShop: "",
  },
  reducers: {
    getAllShops: (state, action) => {
      state.shops = action.payload
    },
    getAllAllShops: (state, action) => {
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
      //window.alert(action.payload)
    },
    updtShop: (state, action) => {
      state.resUpdateShop = action.payload
      window.alert(action.payload)
    },
    delShop: (state, action) =>{
      state.resDelShop = action.payload;
      window.alert(action.payload);
    },
    clnResDel: (state, action) => {
      state.resDelShop = "";
    },
    clnResUpDt: (state, action) => {
      state.resUpdateShop = "";
    },
  },
})

export const { getAllShops, getAllAllShops, getShopIdByPath, resetShopId, getShopDataByPath, resetShopData, resPostShop, updtShop, delShop, clnResDel, clnResUpDt } = shopSlice.actions
export default shopSlice.reducer
