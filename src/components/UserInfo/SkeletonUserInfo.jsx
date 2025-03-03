import { Skeleton, Box, Stack, Typography } from "@mui/material";

const SkeletonUserInfo = () => {
  return (
    <Box width="100%" px={2} mt={3} mb={3}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Skeleton variant="circular" width={56} height={56} />
        <Box>
          <Skeleton width={100} height={20} />
          <Skeleton width={80} height={16} />
        </Box>
      </Stack>

      <Stack direction="row" justifyContent="space-between" mt={2}>
        <Box textAlign="center">
          <Skeleton width={30} height={20} />
          <Typography variant="caption" color="text.secondary">
            Posts
          </Typography>
        </Box>
        <Box textAlign="center">
          <Skeleton width={30} height={20} />
          <Typography variant="caption" color="text.secondary">
            Likes
          </Typography>
        </Box>
        <Box textAlign="center">
          <Skeleton width={30} height={20} />
          <Typography variant="caption" color="text.secondary">
            Comments
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default SkeletonUserInfo;