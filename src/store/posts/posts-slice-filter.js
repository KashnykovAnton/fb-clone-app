import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likesFilter: { min: 0, max: null },
  commentsFilter: { min: 0, max: null },
  sort: { field: null, order: null },
};

const filtersSlice = createSlice({
  name: "postsFilters",
  initialState,
  reducers: {
    setLikesFilter(state, { payload }) {
      state.likesFilter = payload;
    },
    setCommentsFilter(state, { payload }) {
      state.commentsFilter = payload;
    },
    setSort(state, { payload }) {
      state.sort = payload;
    },
  },
});

export const { setLikesFilter, setCommentsFilter, setSort } = filtersSlice.actions;
export const postsFiltersSliceReducer = filtersSlice.reducer;