export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DISCARD_PRODUCT = 'DISCARD_PRODUCT'
export const CLEAN_CART = 'CLEAN_CART'

export const addProductToCart = (data) => ({
    type: ADD_PRODUCT,
    payload: data
})