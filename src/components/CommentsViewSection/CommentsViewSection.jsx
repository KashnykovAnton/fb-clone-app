import { useState, useEffect } from "react";
import { Stack, Avatar, Box, Typography, Button } from "@mui/material";

const CommentsViewSection = ({ comments = [] }) => {
  const [showComments, setShowComments] = useState(false);
  const [prevCommentsLength, setPrevCommentsLength] = useState(comments?.length);

  useEffect(() => {
    if (comments.length > prevCommentsLength) {
      setShowComments(true);
    }
    setPrevCommentsLength(comments.length);
  }, [comments, prevCommentsLength]);

  return (
    <Box>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="body1">Comments</Typography>
        {comments.length > 0 ? (
          <Button
            onClick={() => setShowComments((prev) => !prev)}
            size="small"
            sx={{
              color: "var(--action-color)",
              "&:hover": {
                backgroundColor: "var(--hover-button-color)",
                color: "var(--action-hover-color)",
              },
            }}
          >
            {showComments ? "Hide comments" : "Show all comments"}
          </Button>
        ) : (
          <Typography variant="button text">There are no comments yet</Typography>
        )}
      </Stack>

      {showComments && (
        <Box mt={2}>
          {comments.map((comment, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={2} mb={1}>
              <Avatar src={comment.avatar} sx={{ width: 30, height: 30 }} />
              <Box>
                <Typography variant="subtitle2">{comment.userName}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {comment.dateTime}
                </Typography>
                <Typography variant="body1">{comment.comment}</Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CommentsViewSection;
