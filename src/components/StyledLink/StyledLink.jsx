import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const StyledLink = ({ url = "/", children }) => {
  return (
    <Box textAlign="center" mt={2}>
      <Button
        component={Link}
        to={url}
        variant="contained"
        sx={{
          backgroundColor: "var(--action-color)",
          borderRadius: 2,
          boxShadow: "none",
          textTransform: "none",
          transition: "background-color var(--transition)",
          "&:hover": { backgroundColor: "var(--action-hover-color)", boxShadow: "none" },
        }}
      >
        {children}
      </Button>
    </Box>
  );
};

export default StyledLink;
