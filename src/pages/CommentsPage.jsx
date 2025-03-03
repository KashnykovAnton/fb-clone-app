import StyledContainer from "../decorators/StyledContainer";
import PageCommentsList from "../components/PageCommentsList/PageCommentsList";
import { Box } from "@mui/material";

const CommentsPage = () => {
  return (
    <Box sx={{ flexGrow: 1, ml: "240px", mr: "240px", backgroundColor: "var(--background-color)" }}>
      <StyledContainer>
        <PageCommentsList />
      </StyledContainer>
    </Box>
  );
};

export default CommentsPage;
