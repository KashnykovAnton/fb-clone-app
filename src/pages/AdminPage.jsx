import { Box, Stack } from "@mui/material";
import AddNewUser from "../components/AddNewUser/AddNewUser";
import UsersList from "../components/UsersList/UsersList";
import StyledContainer from "../decorators/StyledContainer";

const AdminPage = () => {
  console.log("AdminPage");
  return (
    <Box sx={{ flexGrow: 1, ml: "240px", mr: "240px", backgroundColor: "var(--background-color)" }}>
      <StyledContainer>
        <Stack direction="row" alignItems="flex-start" gap={3}>
          <UsersList />
          <AddNewUser />
        </Stack>
      </StyledContainer>
    </Box>
  );
};

export default AdminPage;
