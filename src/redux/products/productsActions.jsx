export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'

export const getProductsAction = (data) =>({
    type: GET_PRODUCTS,
    payload: data
})

export const getProductsError = (data) => ({
    type: GET_PRODUCTS_ERROR,
    payload: `${data}`
})