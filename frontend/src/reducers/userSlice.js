import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: userInfoFromStorage,
  },
  reducers: {
    user_login_request: (state) => {
      state.loading = true;
      state.userInfo = {};
    },
    user_login_sucess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    user_login_failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    user_logout: (state, action) => {
      localStorage.removeItem('userInfo');
      return {};
    },
    user_register_request: (state) => {
      state.loading = true;
      return {};
    },
    user_register_sucess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    user_register_failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  user_login_request,
  user_login_sucess,
  user_login_failure,
  user_logout,
  user_register_request,
  user_register_sucess,
  user_register_failure,
} = userSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(user_login_request());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );
    dispatch(user_login_sucess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(user_login_failure(error.message));
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch(user_login_request());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );
    dispatch(user_login_sucess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(user_login_failure(error.message));
  }
};

export default userSlice.reducer;
