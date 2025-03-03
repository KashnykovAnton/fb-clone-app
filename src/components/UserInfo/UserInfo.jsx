import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectProfile } from "../../store/profile/profile-selectors";
import { selectPosts } from "../../store/posts/posts-selectors";
import SkeletonUserInfo from "./SkeletonUserInfo";
import { useFetchInitialProfileData } from "../../hooks/useFetchInitialData";
import { Suspense } from "react";

const UserInfo = () => {
  const profile = useSelector(selectProfile);
  const posts = useSelector(selectPosts);
  const { avatar, userName, nickname, likes, comments } = profile;
  const personalPosts = posts.filter((post) => post.userName === userName);

  useFetchInitialProfileData();

  return (
    <Suspense fallback={<SkeletonUserInfo />}>
      <Box width="100%" px={2} mt={3} mb={3}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={avatar} alt={userName} sx={{ width: 56, height: 56 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight={700}>
              {userName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @{nickname}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Box textAlign="center">
            <Typography variant="subtitle1" fontWeight={700}>
              {personalPosts.length}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Posts
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="subtitle1" fontWeight={700}>
              {likes}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Likes
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="subtitle1" fontWeight={700}>
              {comments}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Comments
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Suspense>
  );
};

export default UserInfo;
