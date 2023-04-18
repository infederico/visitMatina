import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import products from "./productsSlice"
 import rootReducer from './rootReducer';

const store = configureStore({
   reducer: 
      // products: products,
      rootReducer,
   // middleware: [thunk],
   
});
   
export default store;