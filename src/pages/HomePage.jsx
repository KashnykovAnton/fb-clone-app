import { Box, Stack } from "@mui/material";
import FilterSort from "../components/FilterSort/FilterSort";
import PostsList from "../components/PostsList/PostsList";
import StyledContainer from "../decorators/StyledContainer";
import { Outlet } from "react-router-dom";

const HomePage = () => (
  <Box sx={{ flexGrow: 1, ml: "240px", mr: "240px", backgroundColor: "var(--background-color)" }}>
    <StyledContainer>
      <Stack direction="row" alignItems="flex-start" gap={3}>
        <PostsList />
        <FilterSort />
        <Outlet />
      </Stack>
    </StyledContainer>
  </Box>
);

export default HomePage;
