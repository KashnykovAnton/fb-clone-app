export const handleFetchProfile = (state, { payload }) => {
  state.isLoading = false;
  state.userName = payload.userName;
  state.nickname = payload.nickname;
  state.avatar = payload.avatar;
  state.posts = payload.posts;
  state.likes = payload.likes;
  state.comments = payload.comments;
  state.commentMessages = payload.commentMessages;
  state.chatMessages = payload.chatMessages;
};

export const handleUpdateProfile = (state, { payload }) => {
  state.isLoading = false;
  state.userName = payload.userName;
  state.nickname = payload.nickname;
  state.avatar = payload.avatar;
  state.posts = payload.posts;
  state.likes = payload.likes;
  state.comments = payload.comments;
  state.commentMessages = payload.commentMessages;
  state.chatMessages = payload.chatMessages;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};