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


export default restaurantSlice.reducer;