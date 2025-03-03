import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile, updateProfile } from "./profile-thunks";
import { handleFetchProfile, handlePending, handleRejected, handleUpdateProfile } from "./profile-functions";

const initialState = {
  userName: "",
  nickname: "",
  avatar: "",
  posts: 0,
  likes: 0,
  comments: 0,
  commentMessages: [],
  chatMessages: [],
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, handleFetchProfile)
      .addCase(fetchProfile.pending, handlePending)
      .addCase(fetchProfile.rejected, handleRejected)
      .addCase(updateProfile.fulfilled, handleUpdateProfile)
      .addCase(updateProfile.pending, handlePending)
      .addCase(updateProfile.rejected, handleRejected);
  },
});

export const profileSliceReducer = profileSlice.reducer;
