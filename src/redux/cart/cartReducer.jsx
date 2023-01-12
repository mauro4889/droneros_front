import { createSlice } from "@reduxjs/toolkit";
import { agregarCarrito, removerCarrito } from "./utilsCart";

const initialState= {
    products: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            const newAddedProducts = agregarCarrito(state.products, action.payload);
            const newSubtotal = newAddedProducts.reduce(
                (sub, products) => (sub += products.price * products.quantity),
                0
            )
            return {
                ...state,
                products: newAddedProducts,
                total: newSubtotal
            }
        },
        restToCart: (state, action) => {
            console.log(action.payload)
            const newRestProduct = removerCarrito(state.products, action.payload);
            const newSubtotal = newRestProduct.reduce(
                (sub, products) => (sub += products.price * products.quantity),
                0
            )
            return {
                ...state,
                products: newRestProduct,
                total: newSubtotal
            }
        },
        cleanCart: (state) =>{
            return state = initialState
        }
    }
})

export const {addToCart, restToCart, cleanCart} = cartSlice.actions
export default cartSlice.reducer
