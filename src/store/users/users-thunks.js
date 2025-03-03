import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, fetchUserById, fetchAddUser, fetchDeleteUser, fetchUpdateUser } from "../../services/usersService";
import { handleError } from "../../helpers/errorhandler";

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers", (_, { rejectWithValue }) => {
  return fetchUsers()
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const fetchUser = createAsyncThunk("users/fetchUser", (id, { rejectWithValue }) => {
  return fetchUserById(id)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const addUser = createAsyncThunk("users/addUser", (user, { rejectWithValue }) => {
  return fetchAddUser(user)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const deleteUser = createAsyncThunk("users/deleteUser", (id, { rejectWithValue }) => {
  return fetchDeleteUser(id)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const updateUser = createAsyncThunk("users/updateUser", ({ id, user }, { rejectWithValue, dispatch }) => {
  return fetchUpdateUser(id, user)
    .then((data) => {
      dispatch(fetchUser(id));
      return data;
    })
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});
