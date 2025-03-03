export const handleFetchAllFriends = (state, { payload }) => {
  state.friends = payload;
  // state.isLoading = false;
};

export const handleFetchFriend = (state, { payload }) => {
  state.singleFriend = state.friends.find((friend) => friend.id === payload.id);
  // state.isLoading = false;
};

export const handleUpdateFriend = (state, { payload }) => {
  state.friends = state.friends.map((friend) => (friend.id === payload.id ? payload : friend));
  // state.isLoading = false;
};

export const handlePending = (state) => {
  // state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  // state.isLoading = false;
  state.error = payload;
};