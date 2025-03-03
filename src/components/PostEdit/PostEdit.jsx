import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Dialog, DialogActions, IconButton, Stack, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { charactersLength, validatePostText } from "../../helpers/validation";
import { deletePost, updatePost } from "../../store/posts/posts-thunks";
import ImageGallery from "../ImageGallery/ImageGallery";
import CommentsViewSection from "../CommentsViewSection/CommentsViewSection";
import DeleteConfirmationWindow from "../DeleteConfirmationWindow/DeleteConfirmationWindow";
import StyledButton from "../../decorators/StyledButton";

const PostEdit = ({ viewMode = false }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === postId));

  const [postText, setPostText] = useState(post?.postText);
  const [imageUrls, setImageUrls] = useState(post?.images);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isViewMode, setIsViewMode] = useState(viewMode);

  useEffect(() => {
    if (!post) navigate("/");
  }, [post, navigate]);

  const isValid = validatePostText(postText);

  const handlePostTextChange = (event) => setPostText(event.target.value);

  const handleImageUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_IMG_UPLOAD_PRESET,
        sources: ["local", "url", "camera"],
        multiple: false,
        clientAllowedFormats: ["image"],
        maxFileSize: 5000000,
      },
      (error, result) => {
        if (!error && result?.event === "success") {
          setImageUrls((prev) => [...prev, result.info.secure_url]);
        }
      }
    );
  };

  const handleDeleteImage = (index) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  const handleDeletePost = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deletePost(postId));
    navigate("/");
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  const handleSave = () => {
    const updatedPost = {
      ...post,
      postText,
      images: imageUrls,
    };

    dispatch(updatePost({ id: postId, item: updatedPost }));
    navigate("/");
  };

  const handleEdit = () => {
    setIsViewMode(false);
    navigate(`/edit/${postId}`);
  };

  return (
    <Box>
      <Dialog open={true} onClose={() => navigate("/")} fullWidth maxWidth="sm">
        <Box p={3}>
          <Stack spacing={2}>
            <Box>
              <Typography variant="h6">
                {isViewMode ? `View post with id: ${postId}` : `Edit post with id: ${postId}`}
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => navigate("/")}
                aria-label="close"
                sx={{ position: "absolute", right: 16, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <TextField
              label="What's on your mind?"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={postText}
              onChange={handlePostTextChange}
              disabled={isViewMode}
              sx={{
                marginBottom: 3,
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "var(--action-hover-color)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--action-hover-color)",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "var(--action-hover-color)",
                  },
                },
              }}
              error={isValid}
              helperText={`You have entered ${charactersLength(postText)} characters from 100.`}
            />

            {isViewMode ? (
              <ImageGallery images={imageUrls} />
            ) : (
              <Box>
                <Button
                  variant="outlined"
                  startIcon={<AddPhotoAlternateIcon />}
                  onClick={handleImageUpload}
                  sx={{
                    color: "var(--action-color)",
                    "&:hover": {
                      backgroundColor: "var(--hover-button-color)",
                      color: "var(--action-hover-color)",
                    },
                  }}
                >
                  Add Image
                </Button>
                <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                  {imageUrls.map((url, index) => (
                    <Box key={index} position="relative">
                      <img src={url} alt={`uploaded-${index}`} width={80} height={80} style={{ borderRadius: 8 }} />
                      <IconButton
                        onClick={() => handleDeleteImage(index)}
                        sx={{ position: "absolute", top: 0, right: 0, background: "rgba(0,0,0,0.5)" }}
                      >
                        <CloseIcon sx={{ color: "white" }} />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            <CommentsViewSection comments={post?.comments || []} />

            <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
              <Stack direction="row" alignItems="center">
                <IconButton disabled>
                  {post.userLiked ? <ThumbUpAltIcon sx={{ color: "var(--red-color)" }} /> : <ThumbUpOffAltIcon />}
                </IconButton>
                <Typography variant="body2">{post?.likes || 0}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <IconButton disabled>
                  <CommentIcon />
                </IconButton>
                <Typography variant="body2">{post?.comments?.length || 0}</Typography>
              </Stack>
            </Stack>

            <DialogActions sx={{ padding: "0px" }}>
              <Stack direction="row" justifyContent="space-between" width="100%">
                <StyledButton color="error" onClick={handleDeletePost} text="Delete" />

                {isViewMode ? (
                  <DialogActions sx={{ padding: "0px" }}>
                    <StyledButton onClick={handleEdit} text="Edit" />
                    <StyledButton onClick={() => navigate("/")} text="Cancel" />
                  </DialogActions>
                ) : (
                  <DialogActions sx={{ padding: "0px" }}>
                    <StyledButton onClick={handleSave} text="Save" />
                    <StyledButton onClick={() => navigate("/")} text="Cancel" />
                  </DialogActions>
                )}
              </Stack>
            </DialogActions>
          </Stack>
        </Box>
      </Dialog>
      <DeleteConfirmationWindow
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        itemId={postId}
      />
    </Box>
  );
};

export default PostEdit;
