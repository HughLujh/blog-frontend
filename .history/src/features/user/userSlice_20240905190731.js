import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    user: null, 
    accessToken: null,
    loading: false,
    error: null,
  },
  reducers: {
    checkLoginStatus: (state) => {
      const user = localStorage.getItem('user');
      const accessToken = localStorage.getItem('accessToken');
      if (user && accessToken) {
        state.loggedIn = true;
        state.user = JSON.parse(user);  // Assume user info stored earlier (if any)
        state.accessToken = accessToken;
        state.loading = false;
        state.error = null;
      }
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken; // Store the accessToken
      state.loading = false;
      state.error = null;
      localStorage.setItem('accessToken', action.payload.accessToken); // Save accessToken to localStorage
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.accessToken = null; // Clear token on logout
      state.loading = false;
      state.error = null;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken'); // Remove accessToken from localStorage
    },
  },
});

export const { checkLoginStatus, loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await api.post('/auth/login', credentials);
    const { accessToken } = response.data; // Extract accessToken from response
    dispatch(loginSuccess({ accessToken })); // Dispatch accessToken
  } catch (error) {
    dispatch(loginFailure(error.response?.data || "Login failed"));
  }
};

export default userSlice.reducer;
