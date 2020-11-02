import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserDetails } from './profileSlice';
import { user_login_sucess } from './userSlice';

export const updateProfileSlice = createSlice({
  name: 'updateProfile',
  initialState: {
    updatedUser: {},
  },
  reducers: {
    user_detail_update_request: (state) => {
      state.loading = true;
      state = {};
    },
    user_detail_update_sucess: (state, action) => {
      state.loading = false;
      state.updatedUser = action.payload;
    },
    user_detail_update_failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  user_detail_update_request,
  user_detail_update_sucess,
  user_detail_update_failure,
} = updateProfileSlice.actions;

export const updateUserDetails = (user) => async (dispatch, getState) => {
  try {
    dispatch(user_detail_update_request());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put('/api/users/profile', user, config);
    console.log(data);
    dispatch(user_detail_update_sucess(data));
    dispatch(getUserDetails('profile'));
    dispatch(user_login_sucess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(user_detail_update_failure(error.message));
  }
};

export default updateProfileSlice.reducer;
