import { combineReducers } from '@reduxjs/toolkit';

import languageReducer from './languageSlice';
import reviewsReducer from './reviewsSlice';
import productsReducer from './productsSlice'
//seguir importando reducers/slices
import userReducer from './userSlice'
import postReducer from './postSlice'
import productReducer from './productSlice'
import contactReducer from './contactSlice'
import shopReducer from './shopSlice'


const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  user: userReducer,

  post: postReducer,
  product: productReducer, //ruta definitiva
  products: productsReducer, //ruta pra pruebas
  shops: shopReducer,
  contact: contactReducer
})


export default rootReducer;
