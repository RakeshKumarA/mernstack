import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: {},
  },
  reducers: {
    user_detail_request: (state) => {
      state.loading = true;
      state = {};
    },
    user_detail_sucess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    user_detail_failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  user_detail_request,
  user_detail_sucess,
  user_detail_failure,
} = profileSlice.actions;

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(user_detail_request());

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/users/${id}`, config);
    dispatch(user_detail_sucess(data));
  } catch (error) {
    dispatch(user_detail_failure(error.message));
  }
};

export default profileSlice.reducer;
