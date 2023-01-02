import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState:{
        isLogin: false
    },
    reducers:{
        login: (state) =>{
            state.value = true
        },
        logOut: (state) =>{
            state.value = false
        }
    }
})

export const {login, logOut} = userSlice.actions
export default userSlice.reducer