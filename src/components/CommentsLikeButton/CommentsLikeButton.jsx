import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, IconButton, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import NumberFlow from "@number-flow/react";
import { selectProfile } from "../../store/profile/profile-selectors";
import { updatePost } from "../../store/posts/posts-thunks";
import { updateProfile } from "../../store/profile/profile-thunks";

const CommentsLikeButton = React.memo(({ post }) => {
  const { id, likes, userLiked } = post;
  const [liked, setLiked] = useState(userLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    setLiked(userLiked);
    setLikeCount(likes);
  }, [userLiked, likes]);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikeCount((prev) => (newLiked ? prev + 1 : prev - 1));

    const updatedPost = {
      ...post,
      likes: newLiked ? likeCount + 1 : likeCount - 1,
      userLiked: newLiked,
    };
    dispatch(updatePost({ id, item: updatedPost }));
    const updatedProfile = {
      ...profile,
      likes: newLiked ? profile.likes + 1 : profile.likes - 1,
    };
    dispatch(updateProfile(updatedProfile));
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={handleLike}>
          {liked ? <ThumbUpAltIcon sx={{ color: "var(--red-color)" }} /> : <ThumbUpOffAltIcon />}
        </IconButton>
        <Typography variant="body2">
          <NumberFlow value={likeCount} />
        </Typography>
      </Stack>
    </Stack>
  );
});

export default CommentsLikeButton;
