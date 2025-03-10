import { Box, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Divider } from "@mui/material";

const SkeletonUsersList = () => {
  const skeletonCount = 5;

  return (
    <Box sx={{ width: 500, p: 3, backgroundColor: "white", borderRadius: "16px", mb: 3 }}>

      <List>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Box key={index}>
            <ListItem alignItems="flex-start" sx={{ flexDirection: "column", alignItems: "stretch" }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
                <ListItemAvatar>
                  <Skeleton variant="circular" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Skeleton variant="text" width="30%" height={24} />}
                  secondary={
                    <Box>
                      <Skeleton variant="text" width="50%" height={20} />
                      <Skeleton variant="text" width="50%" height={20} />
                      <Skeleton variant="text" width="50%" height={20} />
                      <Skeleton variant="text" width="50%" height={20} />
                    </Box>
                  }
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 1 }}>
              <Skeleton variant="rectangular" width="150px" height="36px" sx={{ borderRadius: "12px" }} />
              </Box>
            </ListItem>

            {index < skeletonCount - 1 && <Divider variant="inset" component="li" />}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default SkeletonUsersList;
