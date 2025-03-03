import { AppBar, Toolbar, Stack, Skeleton } from "@mui/material";

const HeaderSkeleton = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "var(--action-color)", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={120} height={30} />
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSkeleton;
