import StyledContainer from "../decorators/StyledContainer";
import PageMessagesList from "../components/PageMessagesList/PageMessagesList";
import { Box } from "@mui/material";

const MessagesPage = () => {
  return (
    <Box sx={{ flexGrow: 1, ml: "240px", mr: "240px", backgroundColor: "var(--background-color)" }}>
      <StyledContainer>
        <PageMessagesList />
      </StyledContainer>
    </Box>
  );
};

export default MessagesPage;
