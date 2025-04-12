import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        return state.filter(i => i.id !== action.payload);
      }
      item.quantity--;
    },
    remove: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;