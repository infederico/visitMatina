import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    resPostProduct: '',
    resDel: '',
    resUpdt: '',
  },
  reducers: {
    getAllProductsByShopId: (state, action) => {
      state.product = action.payload;
    },
    update: (state, action) => {
      state.resUpdt = action.payload;
    },
    post: (state, action) => {
      state.resPostProduct = action.payload;
    },
    delProduct: (state, action) => {
      state.resDel = action.payload;
    },
    clnDelProduct: (state, action) => {
      if (state.resDel !== ""){
        window.alert(state.resDel);
      }
      state.resDel = "";
    },
    clnUpdtProduct: (state, action) => {
      if (state.resUpdt !== ""){
        window.alert(state.resUpdt);
      }
      state.resUpdt = "";
    },
    clnPstProduct: (state, action) => {
      if (state.resPostProduct !== ""){
        window.alert(state.resPostProduct);
      }
      state.resPostProduct = "";
    },


  },
});

export const { getAllProductsByShopId, post, delProduct, update, clnDelProduct, clnUpdtProduct, clnPstProduct } =
  productSlice.actions;
export default productSlice.reducer;