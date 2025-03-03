import { Container as MuiContainer } from "@mui/material";

const MainContainer = ({ children }) => {
  return (
    <MuiContainer 
      maxWidth="md"
      sx={{ minHeight: "100vh", px: 2 }}
    >
      {children}
    </MuiContainer>
  );
};

export default MainContainer;