import { combineReducers } from '@reduxjs/toolkit'

import languageReducer from './languageSlice'
import reviewsReducer from './reviewsSlice'
//seguir importando reducers/slices
import userReducer from './userSlice'
import postReducer from "./postSlice";

const rootReducer = combineReducers({
  language: languageReducer,
  reviews: reviewsReducer,
  //seguir agregando aca
  user: userReducer,
  post: postReducer,
})

export default rootReducer
