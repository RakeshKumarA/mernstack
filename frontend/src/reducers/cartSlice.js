import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: cartItemsFromStorage,
  },
  reducers: {
    cart_add_item: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },
  },
});

export const { cart_add_item } = cartSlice.actions;

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch(
    cart_add_item({
      product: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      countinstock: data.countinstock,
      qty,
    })
  );
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export default cartSlice.reducer;
