import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.product = action.payload;
    },
    post: (state, action) => {
      return { ...state };
    },
  },
});

export const { getAllProductsByShopId, post } = productSlice.actions;
export default productSlice.reducer;
