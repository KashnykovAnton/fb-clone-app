import {ListItem, ListItemAvatar, ListItemText, Skeleton } from "@mui/material";

const SkeletonUsersList = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Skeleton variant="circular" width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton variant="text" width="50%" height={24} />}
        secondary={
          <ListItem>
            <Skeleton variant="text" width="80%" height={20} />
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="70%" height={20} />
            <Skeleton variant="text" width="50%" height={20} />
          </ListItem>
        }
      />
    </ListItem>
  );
};

export default SkeletonUsersList;
