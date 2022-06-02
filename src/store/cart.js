import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
    quantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        updateCart(state, action) {
            state.quantity = state.quantity + action.payload;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;
