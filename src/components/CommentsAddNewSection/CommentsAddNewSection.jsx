import { Avatar, Box, Stack, Typography } from '@mui/material'

const CommentsAddNewSection = ({avatar, handleOpen}) => {
  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
    <Box
      sx={{
        border: "1px solid var(--border-color)",
        borderRadius: "8px",
        padding: "10px",
        width: "100%",
        cursor: "pointer",
      }}
      onClick={handleOpen}
    >
      <Typography variant="body1" color="textSecondary">
        Write a comment...
      </Typography>
    </Box>
    <Avatar sx={{ width: 30, height: 30 }} src={avatar} />
  </Stack>
  )
}

export default CommentsAddNewSection