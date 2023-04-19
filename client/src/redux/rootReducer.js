import { combineReducers } from '@reduxjs/toolkit'

import languageReducer from './languageSlice';
import reviewsReducer from './reviewsSlice';
import productsReducer from './productsSlice'
//seguir importando reducers/slices
import userReducer from './userSlice'

const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  products: productsReducer,
  //seguir agregando aca
  user: userReducer,
})

export default rootReducer
