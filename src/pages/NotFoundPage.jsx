import { Box, Stack, Typography } from "@mui/material";
import StyledLink from "../components/StyledLink/StyledLink";
import MainContainer from "../components/MainContainer/MainContainer";

function NotFoundPage() {
  return (
    <MainContainer>
      <Stack spacing={2} sx={{mt: 20, alignItems: "center"}}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Unfortunately, this page doesn't exist!
          </Typography>
        </Box>
        <StyledLink>Back to the Home page</StyledLink>
      </Stack>
    </MainContainer>
  );
}

export default NotFoundPage;