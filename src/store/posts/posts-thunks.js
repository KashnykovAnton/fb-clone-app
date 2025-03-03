import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts, fetchPostById, fetchAddPost, fetchDeletePost, fetchUpdatePost } from "../../services/postService";
import { handleError } from "../../helpers/errorhandler";

export const fetchAllPosts = createAsyncThunk("posts/fetchAllPosts", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchPosts();
    return data;
  } catch (error) {
    handleError(error);
    return rejectWithValue(error.message);
  }
});

export const fetchPost = createAsyncThunk("posts/fetchPost", (id, { rejectWithValue }) => {
  return fetchPostById(id)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const addPost = createAsyncThunk("posts/addPost", (item, { rejectWithValue }) => {
  return fetchAddPost(item)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const deletePost = createAsyncThunk("posts/deletePost", (id, { rejectWithValue }) => {
  return fetchDeletePost(id)
    .then((data) => data)
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});

export const updatePost = createAsyncThunk("posts/updatePost", ({ id, item }, { rejectWithValue, dispatch }) => {
  return fetchUpdatePost(id, item)
    .then((data) => {
      dispatch(fetchPost(id));
      return data;
    })
    .catch((error) => {
      handleError(error);
      return rejectWithValue(error.message);
    });
});
