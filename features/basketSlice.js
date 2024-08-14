import { createSlice, configureStore } from '@reduxjs/toolkit'

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
      // state.items = state.items.filter((item) => item !== action.payload);
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
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;


export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => id == item.id)

export const selectBasketTotal = (state) => 
    state.basket.items.reduce((total, item) => total += item.price, 0);

export default basketSlice.reducer;