import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFriends, fetchUpdateFriend, fetchFriendById } from "../../services/friendsService";
import { handleError } from "../../helpers/errorhandler";

export const fetchAllFriends = createAsyncThunk("friends/fetchAllFriends", (_, { rejectWithValue }) => {
  return fetchFriends()
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const fetchFriend = createAsyncThunk("friends/fetchFriend", (id, { rejectWithValue }) => {
  return fetchFriendById(id)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const updateFriend = createAsyncThunk("friends/updateFriend", ({ id, friend }, { rejectWithValue, dispatch }) => {
  return fetchUpdateFriend(id, friend)
    .then((data) => {
      dispatch(fetchFriend(id));
      return data;
    })
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});
