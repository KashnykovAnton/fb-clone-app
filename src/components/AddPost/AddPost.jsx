import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Stack, Typography } from "@mui/material";
import StyledCard from "../../decorators/StyledCard";
import { selectProfile } from "../../store/profile/profile-selectors";

const AddPost = () => {
  const { avatar, nickname } = useSelector(selectProfile);

  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/create");
  };
  return (
    <StyledCard onClick={handleOpen} sx={{width: "598px", ml: "30px"}}>
      <Stack
        direction="row"
        sx={{
          padding: 1,
          alignItems: "center",
        }}
      >
        <Avatar src={avatar} alt={nickname} sx={{ width: 30, height: 30, mr: 2 }} />
        <Typography variant="body2" color="var(--gray-text-color)">
          What's new?
        </Typography>
      </Stack>
    </StyledCard>
  );
};

export default AddPost;
