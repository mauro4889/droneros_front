import { getAllProducts } from "../../axios/products"



export const getProductsMiddleware = () =>{
    return async dispatch => {
        try {
            const response = await getAllProducts()
            dispatch({
                type: 'GET_PRODUCTS',
                payload: response.data.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_PRODUCTS_ERROR',
                payload: error
            })
        }
    }
}