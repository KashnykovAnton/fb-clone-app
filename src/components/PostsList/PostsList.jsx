import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { selectFilteredAndSortedPosts } from "../../store/posts/posts-selectors";
import { useFetchInitialPostsData } from "../../hooks/useFetchInitialData";
import SkeletonPostItem from "../PostItem/SkeletonPostItem";

const PostItem = lazy(() => import("../PostItem/PostItem"));

const PostsList = () => {
  const posts = useSelector(selectFilteredAndSortedPosts);

  useFetchInitialPostsData();

  return (
    <Box pb={2} flex="0 0 50%">
      {posts.length === 0 && (
        <Typography align="center" variant="h6">
          No posts found
        </Typography>
      )}
      {posts.map((post) => {
        return (
        <Suspense key={post.id} fallback={<SkeletonPostItem />}>
          <PostItem postId={post.id} />
        </Suspense>
      )})}
    </Box>
  );
};

export default PostsList;
