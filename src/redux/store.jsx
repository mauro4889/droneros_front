import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import  userReducer  from './userReducer'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';
import cartReducer from './cartReducer';


const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
export default store
