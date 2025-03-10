export const selectProfile = (state) => state.profile;
export const selectComments = (state) => state.profile.commentMessages;
export const selectMessages = (state) => state.profile.chatMessages;
export const selectLoader = (state) => state.profile.isLoading;
export const selectLikesCount = (state) => state.profile.likes;
export const selectCommentsCount = (state) => state.profile.comments;
