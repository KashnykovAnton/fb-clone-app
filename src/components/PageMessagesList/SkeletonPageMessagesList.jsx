import React from "react";
import { Box, Typography, List, Skeleton, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";

const SkeletonPageMessagesList = () => {
  const skeletonCount = 5;

  return (
    <Box sx={{ maxWidth: 600, p: 3, backgroundColor: "white", borderRadius: "16px" }}>
      <List>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Box>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton variant="text" width={180} height={20} />}
                secondary={
                  <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Skeleton variant="text" width="60%" height={16} />
                    <Skeleton variant="text" width={50} height={14} />
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default SkeletonPageMessagesList;
