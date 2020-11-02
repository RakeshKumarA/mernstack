import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    products: [],
    error: '',
  },
  reducers: {
    product_list_request: (state) => {
      state.loading = true;
      state.products = [];
    },
    product_list_sucess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    product_list_failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  product_list_request,
  product_list_sucess,
  product_list_failure,
} = productSlice.actions;

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(product_list_request());
    const { data } = await axios.get('/api/products');
    dispatch(product_list_sucess(data));
    window.location('/');
  } catch (error) {
    dispatch(product_list_failure(error.message));
  }
};

export default productSlice.reducer;
