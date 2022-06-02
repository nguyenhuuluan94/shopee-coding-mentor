import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import cartSlice from "./cart";

const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;
