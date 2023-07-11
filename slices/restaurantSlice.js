import { createSlice } from "@reduxjs/toolkit";

//state
const initialState = {
 restaurant:{}
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  //reducer
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = [...state.restaurant, action.payload];
    },
    },
});

// Actions
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;
export default restaurantSlice.reducer;
