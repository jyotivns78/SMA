// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  id: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        console.log('Login user action:', action);
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.isAuthenticated = true;
      },
      
    logoutUser: (state) => {
      state.token = null;
      state.id = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
