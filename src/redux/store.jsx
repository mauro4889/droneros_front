import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import  userReducer  from './userReducer'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
export default store
export const persistor = persistStore(store)