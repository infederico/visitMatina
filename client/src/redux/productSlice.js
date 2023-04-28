import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    resPostProduct: '',
    resUpdProduct: '',
    resDelProduct: '',
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.product = action.payload;
    },
    post: (state, action) => {
      state.resPostProduct = action.payload.statusText;
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
    cleanResDel: (state, action) => {
      state.resDelProduct = '';
    },
  },
});

export const { getAllProductsByShopId, post, delProduct, update, cleanResPost, cleanResUpd, cleanResDel } =
  productSlice.actions;
export default productSlice.reducer;