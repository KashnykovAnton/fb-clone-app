export const handleFetchAllPosts = (state, { payload }) => {
  console.log("in handleFetchAllPosts");
  state.posts = payload;
  state.isLoading = false;
};

export const handleFetchPost = (state, { payload }) => {
  state.singlePost = payload;
  state.isLoading = false;
};

export const handleAddPost = (state, { payload }) => {
  state.posts = [...state.posts, payload];
  state.isLoading = false;
};

export const handleDeletePost = (state, { payload }) => {
  state.posts = state.posts.filter((post) => post.id !== payload.id);
  state.isLoading = false;
};

export const handleUpdatePost = (state, { payload }) => {
  state.posts = state.posts.map((post) => (post.id === payload.id ? payload : post));
  state.isLoading = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};