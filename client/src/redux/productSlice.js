import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    resPostProduct: {},
    resDel: '',
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.product = action.payload;
    },
    update: (state, action) => {
      return { ...state };
    },
    post: (state, action) => {
      state.resPostProduct = action.payload;
    },
    delProduct: (state, action) => {
      state.resDel = action.payload;
    },
  },
});

export const { getAllProductsByShopId, post, delProduct, update } =
  productSlice.actions;
export default productSlice.reducer;