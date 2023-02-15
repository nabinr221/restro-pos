import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    username: '',
    email: '',
    usersRole: '',
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserDetails: (state, actions) => {
            const { name, username, usersRole, email, token } = actions.payload;
            state.name = name;
            state.username = username;
            state.email = email;
            state.usersRole = usersRole;
            state.token = token;
        },
        resetUserDetails: (state, actions) => {
            state.name = "";
            state.usersRole = "";
            state.email = "";
            state.token = "";
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer