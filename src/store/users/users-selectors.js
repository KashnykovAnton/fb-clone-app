import { createSelector } from "reselect";

export const selectUsers = (state) => state.users.users;
export const selectFriends = (state) => state.users.users.filter(user => user.isFriend);
export const selectLoader = (state) => state.users.isLoading;
export const selectUsersFilters = (state) => state.usersFilters;

export const selectFilteredUsers = createSelector([selectUsers, selectUsersFilters], (users, filters) => {
  const { searchResult } = filters;
  if (!searchResult) return users;

  const lowerCasesearchResult = searchResult.toLowerCase();

  return users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(lowerCasesearchResult) ||
      user.lastName.toLowerCase().includes(lowerCasesearchResult) ||
      user.email.toLowerCase().includes(lowerCasesearchResult)
  );
});
