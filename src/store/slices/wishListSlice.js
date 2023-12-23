import { createSlice } from "@reduxjs/toolkit";

export const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: {
    WishlistItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      console.log(action.payload);
      state.WishlistItems.push({ ...action.payload });
      console.log(state.WishlistItems);
    },
    addMultipleToWishlist: (state, action) => {
      console.log(action.payload);
      state.WishlistItems = [...action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.WishlistItems = state.WishlistItems.filter(
        (p) => p._id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishlist, addMultipleToWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
