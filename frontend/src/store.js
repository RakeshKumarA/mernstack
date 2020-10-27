import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import productDetailReducer from './reducers/productDetailSlice';
import cartReducer from './reducers/cartSlice';

export default configureStore({
  reducer: {
    productList: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
});
