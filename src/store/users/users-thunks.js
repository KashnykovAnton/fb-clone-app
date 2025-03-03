import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, fetchUserById, fetchAddUser, fetchDeleteUser, fetchUpdateUser } from "../../services/usersService";
import { handleError } from "../../helpers/errorhandler";

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchUsers();
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (id, { rejectWithValue }) => {
  try {
    const data = await fetchUserById(id);
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const addUser = createAsyncThunk("users/addUser", async (user, { rejectWithValue }) => {
  try {
    const data = await fetchAddUser(user);
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id, { rejectWithValue }) => {
  try {
    const data = await fetchDeleteUser(id);
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk("users/updateUser", async ({ id, user }, { rejectWithValue, dispatch }) => {
  try {
    const data = await fetchUpdateUser(id, user);
    dispatch(fetchUser(id));
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});
