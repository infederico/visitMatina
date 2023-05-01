import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import './index.css';


import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <PayPalScriptProvider potions={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
          <App className= "index"/>
        </PayPalScriptProvider>
      </BrowserRouter>
    </Provider>
  </PersistGate>
)
