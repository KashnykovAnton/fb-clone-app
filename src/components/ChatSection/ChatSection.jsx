import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Badge, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { selectFriends } from "../../store/users/users-selectors";
import ChatWindow from "../ChatWindow/ChatWindow";
import styles from "./ChatSection.module.css";

const ChatSection = () => {
  const users = useSelector(selectFriends);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenChat = (user) => {
    setSelectedUser(user);
  };

  const handleCloseChat = () => {
    setSelectedUser(null);
  };

  return (
    <Box className={styles.chatSection}>
      <Typography variant="h6">Friends</Typography>
      {users.length === 0 ? (
        <Typography variant="body1">You don't have friends</Typography>
      ) : (
        <List className={styles.userList}>
          {users.map((user) => (
            <ListItem className={styles.userItem} key={user.id} onClick={() => handleOpenChat(user)}>
              <ListItemAvatar>
                <Badge
                  variant="dot"
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-dot": {
                      backgroundColor: "var(--green-color)",
                      height: 12,
                      width: 12,
                      borderRadius: "50%",
                    },
                  }}
                >
                  <Avatar src={user.avatar} />
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={`${user.firstName} ${user.lastName}`}
                secondary={`@${user.nickname}`}
                sx={{ cursor: "pointer" }}
              />
            </ListItem>
          ))}
        </List>
      )}

      {selectedUser && <ChatWindow user={selectedUser} onClose={handleCloseChat} />}
    </Box>
  );
};

export default ChatSection;
