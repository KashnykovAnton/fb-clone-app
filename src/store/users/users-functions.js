export const handleFetchAllUsers = (state, { payload }) => {
  state.users = payload;
  state.isLoading = false;
};

export const handleFetchUser = (state, { payload }) => {
  state.singleUser = payload;
  state.isLoading = false;
};

export const handleAddUser = (state, { payload }) => {
  state.users = [...state.users, payload];
  state.isLoading = false;
};

export const handleDeleteUser = (state, { payload }) => {
  state.users = state.users.filter((user) => user.id !== payload.id);
  state.isLoading = false;
};

export const handleUpdateUser = (state, { payload }) => {
  state.users = state.users.map((user) => (user.id === payload.id ? payload : user));
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
