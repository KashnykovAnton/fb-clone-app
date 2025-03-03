import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, fetchUser, addUser, deleteUser, updateUser } from "./users-thunks";
import {
  handleAddUser,
  handleDeleteUser,
  handleFetchAllUsers,
  handleFetchUser,
  handlePending,
  handleRejected,
  handleUpdateUser,
} from "./users-functions";

const initialState = {
  users: [],
  singleUser: {},
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, handleFetchAllUsers)
      .addCase(fetchAllUsers.pending, handlePending)
      .addCase(fetchAllUsers.rejected, handleRejected)
      .addCase(fetchUser.fulfilled, handleFetchUser)
      .addCase(fetchUser.pending, handlePending)
      .addCase(fetchUser.rejected, handleRejected)
      .addCase(addUser.fulfilled, handleAddUser)
      .addCase(addUser.pending, handlePending)
      .addCase(addUser.rejected, handleRejected)
      .addCase(deleteUser.fulfilled, handleDeleteUser)
      .addCase(deleteUser.pending, handlePending)
      .addCase(deleteUser.rejected, handleRejected)
      .addCase(updateUser.fulfilled, handleUpdateUser)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const usersSliceReducer = usersSlice.reducer;
