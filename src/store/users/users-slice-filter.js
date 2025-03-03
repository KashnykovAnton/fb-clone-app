import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: "",
};

const filtersSlice = createSlice({
  name: "usersFilters",
  initialState,
  reducers: {
    setSearchResult(state, { payload }) {
      state.searchResult = payload;
    }
  },
});

export const { setSearchResult } = filtersSlice.actions;
export const usersFiltersSliceReducer = filtersSlice.reducer;