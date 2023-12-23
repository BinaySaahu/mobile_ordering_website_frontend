import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishListSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer
  },
})