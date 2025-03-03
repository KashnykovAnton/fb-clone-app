import { Box, CircularProgress } from "@mui/material";

function LoaderSpin() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <CircularProgress sx={{ color: "var(--action-color)" }} />
    </Box>
  );
}

export default LoaderSpin;
