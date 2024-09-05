import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/api";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
       loggedIn: false,
       user: null,
       loading: false,
       error: null,
  },
  reducers: {
      checkLoginStatus: (state) => {
           const user = localStorage.getItem('user');
           if (user) {
               state.loggedIn = true;
               state.user = JSON.parse(user);
               state.loading = false;
               state.error = null
           }
      },
      loginStart: (state) => {
           state.loading = true;
           state.error = null;
      },
      loginSuccess: (state, action) => {
           state.loggedIn = true;
           state.user = action.payload;
           state.loading = false;
           state.error = null
           localStorage.setItem('user', JSON.stringify(action.payload))
      },
      loginFailure: (state, action) => {
           state.loading = false
           state.error = action.payload
      },
      logout: (state) => {
           state.loggedIn = false;
           state.user = null;
           state.loading = false;
           state.error = null;
           localStorage.removeItem('user');
       }
  }
});


export const { checkLogin, loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;


export const loginUser = (credentials) => async (dispatch) => {
   dispatch(loginStart());
   try {
       const response = await api.post('/auth/login', credentials);
       dispatch(loginSuccess(response.data));
   } catch (error) {
       dispatch(loginFailure(error.response.data));
   }
};


export default userSlice.reducer;