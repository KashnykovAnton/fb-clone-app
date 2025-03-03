export const selectProfile = (state) => state.profile;
export const selectComments = (state) => state.profile.commentMessages;
export const selectMessages = (state) => state.profile.chatMessages;
export const selectLoader = (state) => state.profile.isLoading;
