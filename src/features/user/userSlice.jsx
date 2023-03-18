import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: '',
        isLogged: false 
    },
    reducers: {
        changeUser: (state, {payload}) => {
            return {
                ...state, 
                username: payload,
                isLogged: true, 
            }
        },
        logout: (state) => {
            return {
                ...state, 
                username: '',
                isLogged: false, 
            }
        }
    }
})


export const { changeUser, logout } = userSlice.actions; 
export const selectUser = (state) => state.user; 
export default userSlice.reducer; 

