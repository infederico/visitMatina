import { combineReducers } from '@reduxjs/toolkit';

import languageReducer from './languageSlice';
import reviewsReducer from './reviewsSlice';
//seguir importando reducers/slices
import userReducer from './userSlice'
import postReducer from './postSlice'
import productReducer from './productSlice'
import contactReducer from './contactSlice'
import shopReducer from './shopSlice'
import cartReducer from './cartSlice'


const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  user: userReducer,

  post: postReducer,
  product: productReducer, //ruta definitiva
  shops: shopReducer,
  contact: contactReducer,
  cart: cartReducer,
})


export default rootReducer;
