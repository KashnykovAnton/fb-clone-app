import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, CardContent, IconButton, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import StyledCard from "../../decorators/StyledCard";
import { warningMessage } from "../../services/toasts";
import CommentsViewSection from "../CommentsViewSection/CommentsViewSection";
import CommentsAddNewSection from "../CommentsAddNewSection/CommentsAddNewSection";
import CommentsAddWindow from "../CommentsAddWindow/CommentsAddWindow";
import PostMenu from "../PostMenu/PostMenu";
import ImageGallery from "../ImageGallery/ImageGallery";
import CommentsLikeButton from "../CommentsLikeButton/CommentsLikeButton";
import DeleteConfirmationWindow from "../DeleteConfirmationWindow/DeleteConfirmationWindow";
import { selectProfile } from "../../store/profile/profile-selectors";
import { deletePost, updatePost } from "../../store/posts/posts-thunks";
import { updateProfile } from "../../store/profile/profile-thunks";
import { selectPostById } from "../../store/posts/posts-selectors";

const PostItem = ({ postId }) => {
  const post = useSelector(selectPostById(postId));
  const { id, avatar, userName, dateTime, postText, images, comments } = post;
  const [anchorEl, setAnchorEl] = useState(null);
  const [comment, setComment] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector(selectProfile);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleViewClick = () => {
    navigate(`/view/${post.id}`);
    handleMenuClose();
  };

  const handleEditClick = () => {
    navigate(`/edit/${post.id}`);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
    handleMenuClose();
  };

  const handleConfirmDelete = () => {
    dispatch(deletePost(post.id));
    setIsDialogOpen(false);
    warningMessage(`Post with ID: ${post.id} was deleted`);
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  const handleOpenCommentModal = () => {
    setIsCommentModalOpen(true);
  };

  const handleCloseCommentModal = () => {
    setIsCommentModalOpen(false);
    setComment("");
  };

  const handlePostComment = () => {
    const newComment = {
      avatar: profile.avatar,
      userName: profile.userName,
      comment,
      dateTime: new Date().toISOString().replace("T", " ").slice(0, 16),
      postId: id,
    };
    const updatedPost = {
      ...post,
      comments: [...post.comments, newComment],
    };

    const updatedProfile = {
      ...profile,
      comments: profile.comments + 1,
      commentMessages: [...profile.commentMessages, newComment],
    };

    dispatch(updatePost({ id, item: updatedPost }));
    dispatch(updateProfile(updatedProfile));
    handleCloseCommentModal();
  };

  return (
    <StyledCard sx={{ marginBottom: 3 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: "blue", marginRight: 1 }} src={avatar} />
            <Box>
              <Typography variant="subtitle2">{userName}</Typography>
              <Typography variant="body2" color="textSecondary">
                {dateTime}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <PostMenu
          anchor={anchorEl}
          onClose={handleMenuClose}
          onViewClick={handleViewClick}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />

        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          {postText}
        </Typography>

        <ImageGallery images={images} />

        <Box sx={{ marginTop: 1 }}>
          <Stack spacing={2}>
            <CommentsViewSection comments={comments} />
            <CommentsAddNewSection avatar={profile.avatar} handleOpen={handleOpenCommentModal} />
          </Stack>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <CommentsLikeButton post={post} />
          <Stack direction="row" alignItems="center">
            <IconButton disabled>
              <CommentIcon />
            </IconButton>
            <Typography variant="body2">{comments.length}</Typography>
          </Stack>
        </Stack>
      </CardContent>

      <DeleteConfirmationWindow
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        itemId={post.id}
      />

      <CommentsAddWindow
        isOpen={isCommentModalOpen}
        onClose={handleCloseCommentModal}
        onPost={handlePostComment}
        value={comment}
        onChange={handleCommentChange}
      />
    </StyledCard>
  );
};

export default PostItem;
