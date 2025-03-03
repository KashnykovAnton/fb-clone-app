import React from 'react';
import { Box, CardContent, IconButton, Skeleton, Stack } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StyledCard from '../../decorators/StyledCard';

const SkeletonPostItem = () => {
  return (
    <StyledCard sx={{ marginBottom: 3 }}>
      <CardContent>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Skeleton variant="circular" width={40} height={40} sx={{ marginRight: 1 }} />
            <Box>
              <Skeleton variant="text" width="50px" />
              <Skeleton variant="text" width="50px" />
            </Box>
          </Box>
          <IconButton disabled>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Skeleton variant="text" width="100%" height={80} sx={{ marginTop: 2 }} />

        <Box sx={{ marginTop: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={200} />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Stack spacing={2}>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
          </Stack>
        </Box>

        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Skeleton variant="circle" width={40} height={40} />
          <Stack direction="row" alignItems="center">
            <Skeleton variant="circle" width={30} height={30} />
            <Skeleton variant="text" width="30%" />
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default SkeletonPostItem;