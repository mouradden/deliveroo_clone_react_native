import { createSlice, configureStore } from '@reduxjs/toolkit'

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
    }
  },
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload;
    }
  }
})

export const { setRestaurant } = restaurantSlice.actions;


export const selectRestaurant = (state) => state.restaurant.restaurant;

// export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => id == item.id)

// export const selectBasketTotal = (state) => 
//     state.basket.items.reduce((total, item) => total += item.price, 0);

export default restaurantSlice.reducer;