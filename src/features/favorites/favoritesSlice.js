import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addToFav(state, action) {
      const product = action.payload;

      state.favorites.push({
        id: product.id,
        title: product.title,
        unitPrice: product.price,
        thumbnail: product.thumbnail,
      });
    },

    deleteFromFav(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
    },

    toggleFavorite(state, action) {
      const product = action.payload;

      const existingItem = state.favorites.find(
        (item) => item.id === product.id,
      );

      if (existingItem) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== product.id,
        );
      } else {
        state.favorites.push({
          id: product.id,
          title: product.title,
          unitPrice: product.price,
          thumbnail: product.thumbnail,
        });
      }
    },

    clearFav(state) {
      state.favorites = [];
    },
  },
});

export const { addToFav, deleteFromFav, clearFav, toggleFavorite } =
  favoritesSlice.actions;

export const getFav = (state) => state.favorites.favorites;

export const getTotalFavItems = (state) => state.favorites.favorites.length;

export default favoritesSlice.reducer;
