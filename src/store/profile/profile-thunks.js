import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProfileAPI, fetchUpdateProfileAPI } from "../../services/profileService";
import { handleError } from "../../helpers/errorhandler";

export const fetchProfile = createAsyncThunk("profile/fetchProfile", (_, { rejectWithValue }) => {
  return fetchProfileAPI()
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const updateProfile = createAsyncThunk("profile/updateProfile", (updatedProfile, { rejectWithValue }) => {
  return fetchUpdateProfileAPI(updatedProfile)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});
