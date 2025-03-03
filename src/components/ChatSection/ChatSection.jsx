import { useState } from "react";
import { Avatar, Badge, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ChatWindow from "../ChatWindow/ChatWindow";
import styles from "./ChatSection.module.css";
import { useFetchInitialFriendsData } from "../../hooks/useFetchInitialData";
import { selectFriends, selectLoader } from "../../store/friends/friends-selectors";
import { updateFriend } from "../../store/friends/friends-thunks";
import SkeletonChatSection from "./SkeletonChatSection";

const ChatSection = () => {
  useFetchInitialFriendsData();
  const friends = useSelector(selectFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);

  const handleOpenChat = (friend) => {
    setSelectedFriend(friend);
  };

  const handleCloseChat = () => {
    setSelectedFriend(null);
  };

  const handleUpdateMessages = (friendId, newMessages) => {
    const friend = friends.find((friend) => friend.id === friendId);

    const updatedFriend = {
      ...friend,
      messages: newMessages,
    };

    dispatch(updateFriend({ id: friendId, friend: updatedFriend }));
  };

  if (isLoading) {
    return <SkeletonChatSection />;
  }

  return (
    <Box className={styles.chatSection}>
      <Typography variant="h6">Friends</Typography>
      <List className={styles.friendList}>
        {friends.map((friend) => (
          <ListItem className={styles.friendItem} key={friend.id} onClick={() => handleOpenChat(friend)}>
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
                <Avatar src={friend.avatar} />
              </Badge>
            </ListItemAvatar>
            <ListItemText primary={friend.userName} secondary={`@${friend.nickname}`} sx={{ cursor: "pointer" }} />
          </ListItem>
        ))}
      </List>

      {selectedFriend && (
        <ChatWindow friend={selectedFriend} onClose={handleCloseChat} onUpdateMessages={handleUpdateMessages} />
      )}
    </Box>
  );
};

export default ChatSection;
