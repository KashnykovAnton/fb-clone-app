import React from "react";
import { Box, Typography, List, Skeleton } from "@mui/material";

const SkeletonPageCommentsList = () => {
  return (
    <Box sx={{ maxWidth: 600, p: 3, backgroundColor: "white", borderRadius: "16px" }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        <Skeleton variant="text" width="80%" height={40} />
      </Typography>

      <List>
        {[...Array(5)].map((_, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column", marginBottom: 2 }}>
            <Skeleton variant="text" width="100%" height={40} />
            <Skeleton variant="text" width="80%" height={20} />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default SkeletonPageCommentsList;
