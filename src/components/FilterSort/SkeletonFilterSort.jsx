import { Box, Skeleton, Stack } from "@mui/material";
import StyledCard from "../../decorators/StyledCard";

const SkeletonFilterSort = () => {
    return (
      <StyledCard>
        <Box flex={1} display="flex" gap={2} alignItems="center" p={2}>
          <Box flexBasis="30%">
            <Skeleton variant="text" width={120} height={20} />
            <Skeleton variant="rectangular" width="100%" height={40} />
            <Skeleton variant="rectangular" width="100%" height={40} />
          </Box>
  
          <Box flexBasis="30%">
            <Skeleton variant="text" width={150} height={20} />
            <Skeleton variant="rectangular" width="100%" height={40} />
            <Skeleton variant="rectangular" width="100%" height={40} />
          </Box>
  
          <Box flexBasis="40%">
            <Skeleton variant="text" width={100} height={20} />
            <Stack direction="column" spacing={1}>
              <Skeleton variant="rectangular" width="100%" height={40} />
              <Skeleton variant="rectangular" width="100%" height={40} />
            </Stack>
          </Box>
        </Box>
      </StyledCard>
    );
  };

export default SkeletonFilterSort;