import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchPost, addPost, deletePost, updatePost } from "./posts-thunks";
import {
  handleFetchAllPosts,
  handleFetchPost,
  handleAddPost,
  handleDeletePost,
  handleUpdatePost,
  handlePending,
  handleRejected,
} from "./posts-functions";

const initialState = {
  posts: [],
  singlePost: {},
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.fulfilled, handleFetchAllPosts)
      .addCase(fetchAllPosts.pending, handlePending)
      .addCase(fetchAllPosts.rejected, handleRejected)
      .addCase(fetchPost.fulfilled, handleFetchPost)
      .addCase(fetchPost.pending, handlePending)
      .addCase(fetchPost.rejected, handleRejected)
      .addCase(addPost.fulfilled, handleAddPost)
      .addCase(addPost.pending, handlePending)
      .addCase(addPost.rejected, handleRejected)
      .addCase(deletePost.fulfilled, handleDeletePost)
      .addCase(deletePost.pending, handlePending)
      .addCase(deletePost.rejected, handleRejected)
      .addCase(updatePost.fulfilled, handleUpdatePost)
      .addCase(updatePost.pending, handlePending)
      .addCase(updatePost.rejected, handleRejected);
  },
});

export const postsSliceReducer = postsSlice.reducer;
