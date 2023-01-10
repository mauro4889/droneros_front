import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addProduct: (state, payload) =>{
            state.push(...payload)
        }
    }
})

export default cartSlice.reducer