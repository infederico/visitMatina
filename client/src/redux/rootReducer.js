import { combineReducers } from '@reduxjs/toolkit';

import languageReducer from './languageSlice';
import reviewsReducer from './reviewsSlice';
import productsReducer from './productsSlice'
//seguir importando reducers/slices

const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  products: productsReducer
  //seguir agregando aca
});

export default rootReducer;
