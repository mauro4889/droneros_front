import {combineReducers, configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import cartReducer from './cart/cartReducer';


const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer= combineReducers ({
    cart: cartReducer
})

const presistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: presistedReducer, 
    middleware: [thunk]
})





