import { createSlice, configureStore } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';
const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: []
  },
  reducers: {
    addToBasket: (state, action) => {

      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      let newBasket = [...state.items];

      if (index >= 0)
      {
        newBasket.splice(index, 1);
        state.items = newBasket;
      }
      else
      {
        console.warn(`cant remove product ${action.payload.id} as its not in basket`);
      }
    },
    removeGroupFromBasket: (state, action) => {
      const newBasket = state.items.filter((item) => item.name != action.payload.title);
      state.items = newBasket;
    },
  }
})

export const { addToBasket, removeFromBasket, removeGroupFromBasket} = basketSlice.actions;


export const selectBasketItems = (state) => state.basket.items;

// export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => id == item.id)
const getBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = createSelector(
  [getBasketItems, (state, id) => id],
  (items, id) => items.filter((item) => id === item.id)
);
export const selectBasketTotal = (state) => 
    state.basket.items.reduce((total, item) => total += item.price, 0);

export default basketSlice.reducer;