import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import productDetailReducer from './reducers/productDetailSlice';

export default configureStore({
  reducer: {
    productList: productReducer,
    productDetail: productDetailReducer,
  },
});
