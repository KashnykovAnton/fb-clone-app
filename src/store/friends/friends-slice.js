import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFriends, fetchFriend, updateFriend } from "./friends-thunks";
import { handleFetchAllFriends, handleFetchFriend, handlePending, handleRejected, handleUpdateFriend } from "./friends-functions";

const initialState = {
  friends: [],
  singleFriend: {},
  // isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFriends.fulfilled, handleFetchAllFriends)
      .addCase(fetchAllFriends.pending, handlePending)
      .addCase(fetchAllFriends.rejected, handleRejected)
      .addCase(fetchFriend.fulfilled, handleFetchFriend)
      .addCase(fetchFriend.pending, handlePending)
      .addCase(fetchFriend.rejected, handleRejected)
      .addCase(updateFriend.fulfilled, handleUpdateFriend)
      .addCase(updateFriend.pending, handlePending)
      .addCase(updateFriend.rejected, handleRejected);
  },
});

export const friendsSliceReducer = friendsSlice.reducer;
