import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

// const userSubsetState = (state) => ({
//   user: state.user,
// })

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  // selector: userSubsetState,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export default store
