import { createSlice } from "@reduxjs/toolkit";

const SEARCH_INITIAL_STATE = {
    searchTerm: ""
};

const searchSlice = createSlice({
    name: "search",
    initialState: SEARCH_INITIAL_STATE,
    reducers: {
        updateSearch(state, action) {
            console.log(action);
            state.searchTerm = action.payload;
        }
    }
});

export const searchActions = searchSlice.actions;
export default searchSlice;
