import { combineReducers } from '@reduxjs/toolkit';

import languageReducer from './languageSlice';
import reviewsReducer from './reviewsSlice';
//seguir importando reducers/slices

const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  //seguir agregando aca
});

export default rootReducer;
