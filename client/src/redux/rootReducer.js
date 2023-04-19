import { combineReducers } from '@reduxjs/toolkit';

import languageReducer from './languageSlice';
import reviewsReducer from './reviewsSlice';
import userReducer from './userSlice';


import languageReducer from './languageSlice'
import reviewsReducer from './reviewsSlice'
//seguir importando reducers/slices
import userReducer from './userSlice'
import postReducer from './postSlice'
import productReducer from './productSlice'


const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  user: userReducer,

  post: postReducer,
  product: productReducer,
})


export default rootReducer;
