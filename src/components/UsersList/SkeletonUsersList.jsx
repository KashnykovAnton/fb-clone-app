import { Box, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Divider } from "@mui/material";

const SkeletonUsersList = ({ count = 5 }) => {
  return (
    <Box sx={{ width: 500, p: 3, backgroundColor: "white", borderRadius: "16px", mb: 3 }}>
      <Skeleton variant="text" width="60%" height={40} sx={{ mb: 3, mx: "auto" }} />
      
      <List>
        {Array.from({ length: count }).map((_, index) => (
          <Box key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton variant="text" width="50%" height={24} />}
                secondary={
                  <>
                    <Skeleton variant="text" width="80%" height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="70%" height={20} />
                    <Skeleton variant="text" width="50%" height={20} />
                  </>
                }
              />
            </ListItem>
            {index < count - 1 && <Divider variant="inset" component="li" />}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default SkeletonUsersList;