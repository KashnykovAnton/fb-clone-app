import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledPostButton = styled(Button)(() => ({
  textTransform: "none",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  border: "1px solid var(--border-color)",
  borderRadius: "12px",
  color: "var(--text-color)",
  width: "120px",
  backgroundColor: "var(--background-color)",
  transition: "background-color var(--transition), color var(--transition)",
  "&:hover": {
    backgroundColor: "var(--button-hover-color)",
    color: "var(--main-text-color)",
  },
}));

const StyledButton = ({ text, onClick = () => {}, disabled = false, sx = {} }) => {
  return (
    <StyledPostButton onClick={onClick} disabled={disabled} sx={sx}>
      {text}
    </StyledPostButton>
  );
};

export default StyledButton;
