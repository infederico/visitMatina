import { combineReducers } from '@reduxjs/toolkit';

import languageReducer from './languageSlice'
import reviewsReducer from './reviewsSlice'
import userReducer from './userSlice'
import postReducer from './postSlice'
import productReducer from './productSlice'
import contactReducer from './contactSlice'


const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  user: userReducer,

  post: postReducer,
  product: productReducer,
  contact: contactReducer,
})


export default rootReducer;
