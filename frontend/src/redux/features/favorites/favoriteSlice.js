import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.some((p) => p._id === action.payload._id)) {
        state.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      return state.filter((p) => p._id !== action.payload._id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
