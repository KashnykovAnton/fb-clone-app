import { useSelector } from "react-redux";
import { Box, List, Typography } from "@mui/material";
import UserItem from "../UserItem/UserItem";
import { selectFilteredUsers, selectLoader } from "../../store/users/users-selectors";
import { useFetchInitialUsersData } from "../../hooks/useFetchInitialData";
import SkeletonUsersList from "./SkeletonUsersList";

const UsersList = () => {
  const users = useSelector(selectFilteredUsers);
  const isLoading = useSelector(selectLoader);

  useFetchInitialUsersData();

  if (isLoading) {
    return <SkeletonUsersList />;
  }

  return (
    <Box sx={{ width: 500, p: 3, backgroundColor: "white", borderRadius: "16px", mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        User Management
      </Typography>

      <List>
        {users.length === 0 ? (
          <span variant="body1" sx={{ textAlign: "center" }}>
            No users yet.
          </span>
        ) : (
          users.map((user, index) => <UserItem key={user.id} user={user} index={index} length={users.length} />)
        )}
      </List>
    </Box>
  );
};

export default UsersList;
