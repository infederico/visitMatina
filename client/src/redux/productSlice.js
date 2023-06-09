import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    resPostProduct: '',
    resDel: '',
    resUpdt: '',
    resUpdProduct: '',
    resDelProduct: '', //
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.product = action.payload;
    },
    updateLeo: (state, action) => {
      state.resUpdt = action.payload;
    },
    post: (state, action) => {
      state.resPostProduct = action.payload;
    },
    cleanResPost: (state, action) => {
      state.resPostProduct = '';
    },
    update: (state, action) => {
      state.resUpdProduct = action.payload;
    },
    cleanResUpd: (state, action) => {
      state.resUpdProduct = '';
    },
    delProduct: (state, action) => {
      state.resDelProduct = action.payload.success;
    },
    delProductLeo: (state, action) => {
      state.resDel = action.payload;
    },
    cleanResDel: (state, action) => {
      state.resDelProduct = '';
    },
    clnDelProduct: (state, action) => {
      state.resDel = "";
    },
    clnUpdtProduct: (state, action) => {
      state.resUpdt = "";
    },
    clnPstProduct: (state, action) => {
      state.resPostProduct = "";
    },


  },
});

export const { getAllProductsByShopId, post, delProduct, update, cleanResPost, cleanResUpd, cleanResDel, clnDelProduct, clnUpdtProduct, clnPstProduct, updateLeo, delProductLeo } =
  productSlice.actions;
export default productSlice.reducer;