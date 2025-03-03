import { createSelector } from "reselect";

export const selectPosts = (state) => state.posts.posts;
export const selectLoader = (state) => state.posts.isLoading;
export const selectFilters = (state) => state.postsFilters;
export const selectPostById = (postId) => (state) => {
  return state.posts.posts.find((post) => post.id === postId);
};

const selectFilteredPosts = createSelector([selectPosts, selectFilters], (posts, filters) => {
  const { likesFilter, commentsFilter } = filters;

  const isLikesFilterActive = likesFilter.min > 0 || likesFilter.max > 0;
  const isCommentsFilterActive = commentsFilter.min > 0 || commentsFilter.max > 0;

  if (!isLikesFilterActive && !isCommentsFilterActive) {
    return posts;
  }

  return posts.filter((post) => {
    const likesMatch =
      !isLikesFilterActive ||
      (post.likes >= likesFilter.min && (likesFilter.max === 0 || post.likes <= likesFilter.max));

    const commentsMatch =
      !isCommentsFilterActive ||
      (post.comments.length >= commentsFilter.min &&
        (commentsFilter.max === 0 || post.comments.length <= commentsFilter.max));
    return likesMatch && commentsMatch;
  });
});

const selectSortedPosts = createSelector([selectFilters, selectFilteredPosts], (filters, filteredPosts) => {
  const { sort } = filters;

  if (!sort.field || !sort.order) return filteredPosts;

  return filteredPosts.slice().sort((a, b) => {
    const aValue = sort.field === "comments" ? a.comments.length : a[sort.field];
    const bValue = sort.field === "comments" ? b.comments.length : b[sort.field];

    return sort.order === "asc" ? aValue - bValue : bValue - aValue;
  });
});

export const selectFilteredAndSortedPosts = createSelector([selectSortedPosts], (sortedPosts) => sortedPosts);
