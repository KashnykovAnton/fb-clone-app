import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoader, selectProfile } from "../../store/profile/profile-selectors";
import { selectPosts } from "../../store/posts/posts-selectors";
import SkeletonUserInfo from "./SkeletonUserInfo";

const UserInfo = () => {
  const profile = useSelector(selectProfile);
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectLoader);
  const { avatar, userName, nickname, likes, comments } = profile;
  const personalPosts = posts.filter((post) => post.userName === userName);

  if (isLoading) {
    return <SkeletonUserInfo/>;
  }

  return (
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
  );
};

export default UserInfo;
