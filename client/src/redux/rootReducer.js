import { combineReducers } from '@reduxjs/toolkit';

import languageReducer from './languageSlice';
import reviewsReducer from './reviewsSlice';
import userReducer from './userSlice';


const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  user: userReducer,
  
});

export default rootReducer;
