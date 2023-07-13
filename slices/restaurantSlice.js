import { createSlice } from "@reduxjs/toolkit";

//state
const initialState = {
  id: null,
  imgUrl:null,
  title: null,
  rating: null,
  genre: null,
  genreId: null,
  address: null,
  short_description: null,
  dishes: null,
  long: null,
  lat: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
    state.items = action.payload;
    },
    }
});

// Actions
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.items;
export default restaurantSlice.reducer;
