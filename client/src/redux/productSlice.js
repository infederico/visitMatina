import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    resPostProduct: {},
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.product = action.payload;
    },
    postNewProduct: (state, action) => {
      state.resPostProduct = action.payload.data;
    },
  },
});

export const { getAllProductsByShopId, postNewProduct } = productSlice.actions;
export default productSlice.reducer;
