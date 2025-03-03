import React from "react";
import { Box, Divider, Skeleton, Stack } from "@mui/material";
import styles from "./SidePanel.module.css";

const SkeletonSidePanel = () => {
  return (
    <Box className={styles.sidePanel}>
      <Skeleton variant="circular" width={60} height={60} sx={{ marginBottom: 2 }} />
      <Skeleton variant="text" width="80%" height={20} />
      <Skeleton variant="text" width="60%" height={15} sx={{ marginBottom: 2 }} />
      
      <Divider variant="middle" flexItem sx={{ marginY: 2 }} />
      
      <Stack justifyContent="space-between" height="100%" width="100%" mt={3}>
        <Stack spacing={1}>
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={40} />
        </Stack>

        <Stack spacing={1}>
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="100%" height={40} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SkeletonSidePanel;
