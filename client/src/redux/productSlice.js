import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
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
      return { ...state };
    },
    delProduct: (state, action) => {
      state.resDel = action.payload;
    },
  },
});

export const { getAllProductsByShopId, post, delProduct, update } =
  productSlice.actions;
export default productSlice.reducer;
