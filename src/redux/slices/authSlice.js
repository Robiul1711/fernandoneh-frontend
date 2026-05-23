import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user || null;
      state.isAuthenticated = !!token;
    },
    // keep backward compat alias
    setToken: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.isAuthenticated = !!token;
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuth, setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser  = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
