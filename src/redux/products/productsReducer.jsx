import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "./productsActions"

const initialState = []




export const productsReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type){
        case GET_PRODUCTS:
            return{
                ...state,
                state: [...payload]
            }
        case GET_PRODUCTS_ERROR:
            return console.log(payload)
        default:
            return state
    }
}


