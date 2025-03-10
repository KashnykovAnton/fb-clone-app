import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const PageMessagesItem = ({ message, length }) => {
  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={message.friendAvatar} alt={message.friendName} />
        </ListItemAvatar>
        <ListItemText
          primary={`Chat with ${message.friendName} (${message.friendNickname})`}
          secondary={
            <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
              <span>{message.text}</span>
              <span style={{ fontSize: "12px" }}>{message.dateTime}</span>
            </Typography>
          }
        />
      </ListItem>
      {length > 1 && <Divider variant="inset" component="li" />}
    </Box>
  );
};

export default PageMessagesItem;
