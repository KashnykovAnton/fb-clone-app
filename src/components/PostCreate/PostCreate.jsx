import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Box, Button, Dialog, DialogActions, IconButton, Stack, TextField, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import StyledButton from "../../decorators/StyledButton";
import { validatePostText, charactersLength } from "../../helpers/validation";
import { infoMessage, warningMessage } from "../../services/toasts";
import { selectProfile } from "../../store/profile/profile-selectors";
import { addPost } from "../../store/posts/posts-thunks";
import { updateProfile } from "../../store/profile/profile-thunks";

const PostCreate = () => {
  const [postText, setPostText] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const { REACT_APP_CLOUD_NAME, REACT_APP_IMG_UPLOAD_PRESET } = process.env;

  const isValid = validatePostText(postText);

  const handlePostTextChange = (event) => setPostText(event.target.value);

  const handleImageUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: REACT_APP_CLOUD_NAME,
        uploadPreset: REACT_APP_IMG_UPLOAD_PRESET,
        sources: ["local", "url", "camera"],
        multiple: false,
        clientAllowedFormats: ["image"],
        maxFileSize: 5000000, // 5MB
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const newImageUrls = [...imageUrls, result.info.secure_url];
          setImageUrls(newImageUrls);
        }
      }
    );
  };

  const handleSubmit = () => {
    const newPost = {
      id: nanoid(),
      avatar: profile.avatar,
      userName: profile.userName,
      dateTime: new Date().toISOString().replace("T", " ").slice(0, 16),
      postText,
      images: imageUrls,
      likes: 0,
      userLiked: false,
      comments: [],
    };
    const updatedProfile = {
      ...profile,
      posts: profile.posts + 1,
    };
    if (!isValid) {
      dispatch(addPost(newPost));
      dispatch(updateProfile(updatedProfile));
      infoMessage("You have just created a new post!");
      handleCloseModal();
    } else {
      warningMessage("Please fix the validation errors before submitting.");
    }
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <Box>
      <Dialog open={true} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <Box p={3}>
          <Stack spacing={2}>
            <Box>
              <Typography variant="h6">Create Post</Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseModal}
                aria-label="close"
                sx={{ position: "absolute", right: 16, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box>
              <TextField
                label="What's on your mind?"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={postText}
                onChange={handlePostTextChange}
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
                helperText={
                  isValid
                    ? `The description must be 100 characters or fewer. ${charactersLength(postText)} characters now.`
                    : `You have entered ${charactersLength(postText)} characters from 100.`
                }
              />

              <Button
                variant="outlined"
                component="label"
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
                {imageUrls?.map((url, index) => (
                  <Box key={index} position="relative">
                    <img src={url} alt={`uploaded-${index}`} width={80} height={80} style={{ borderRadius: 8 }} />
                  </Box>
                ))}
              </Box>
            </Box>

            <DialogActions>
              <StyledButton onClick={handleCloseModal} text="Cancel" />
              <StyledButton onClick={handleSubmit} text="Post" disabled={!postText && imageUrls.length === 0} />
            </DialogActions>
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
};

export default PostCreate;
