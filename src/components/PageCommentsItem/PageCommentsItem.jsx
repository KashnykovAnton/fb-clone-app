import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const PageCommentsItem = ({ index, comment, length }) => {
  return (
    <Box key={index}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={comment.avatar} alt={comment.userName} />
        </ListItemAvatar>
        <ListItemText
          primary={`Post ID: ${comment.postId}`}
          secondary={
            <Typography variant="body2">
              <span>
                {comment.userName} - {comment.dateTime}
              </span>
              <span>{comment.comment}</span>
            </Typography>
          }
        />
      </ListItem>
      {index < length - 1 && <Divider variant="inset" component="li" />}
    </Box>
  );
};

export default PageCommentsItem;
