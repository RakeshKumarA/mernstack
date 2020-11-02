import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import productDetailReducer from './reducers/productDetailSlice';
import cartReducer from './reducers/cartSlice';
import userReducer from './reducers/userSlice';
import registerReducer from './reducers/registerSlice';
import profileReducer from './reducers/profileSlice';
import updateProfileReducer from './reducers/updateProfileSlice';

export default configureStore({
  reducer: {
    productList: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    user: userReducer,
    register: registerReducer,
    profile: profileReducer,
    updateProfile: updateProfileReducer,
  },
});
