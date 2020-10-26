import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: {
    loading: false,
    product: { reviews: [] },
    error: '',
  },
  reducers: {
    product_detail_request: (state) => {
      state.loading = true;
      state.product = {};
    },
    product_detail_sucess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    product_detail_failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  product_detail_request,
  product_detail_sucess,
  product_detail_failure,
} = productDetailSlice.actions;

export const listProductDetail = (id) => async (dispatch) => {
  try {
    dispatch(product_detail_request());
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(product_detail_sucess(data));
  } catch (error) {
    dispatch(product_detail_failure(error.message));
  }
};

export default productDetailSlice.reducer;
