import { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import StyledButton from "../../decorators/StyledButton";
import { useDispatch, useSelector } from "react-redux";
import { warningMessage } from "../../services/toasts";
import { selectProfile } from "../../store/profile/profile-selectors";
import { updateProfile } from "../../store/profile/profile-thunks";

const ChatWindow = ({ friend, onClose, onUpdateMessages }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(friend.messages || []);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (!message.trim()) {
      warningMessage("Please type something before sending.");
      return;
    }

    const newMessage = {
      friendAvatar: friend.avatar,
      friendName: friend.userName,
      friendNickname: friend.nickname,
      avatar: profile.avatar,
      userName: profile.userName,
      text: message,
      dateTime: new Date().toISOString().replace("T", " ").slice(0, 16),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    onUpdateMessages(friend.id, updatedMessages);
    const updatedProfile = {
      ...profile,
      chatMessages: [...profile.chatMessages, newMessage],
    };
    dispatch(updateProfile(updatedProfile));
    setMessage("");
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <Box display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <Typography variant="h6">Chat with {friend.userName}</Typography>
        <Avatar src={friend.avatar} sx={{ width: 40, height: 40, ml: 2 }} />
      </Box>
      <DialogContent
        sx={{
          p: 0,
          margin: "0 24px",
          minHeight: "100px",
          borderRadius: 1,
          border: "1px solid var(--border-color)",
        }}
      >
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={message.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="subtitle2">{message.userName}</Typography>}
                secondary={
                  <>
                    <Typography variant="body2">{message.text}</Typography>
                    <Typography variant="caption" sx={{ display: "block", color: "gray", mt: 0.5 }}>
                      {new Date(message.dateTime).toLocaleString()}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <TextField
        multiline
        rows={3}
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          padding: "0 24px",
          mt: 2,
          mb: 2,
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "var(--action-hover-color)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--action-hover-color)",
            },
          },
        }}
      />
      <DialogActions sx={{ padding: "0 24px 24px 0" }}>
        <StyledButton onClick={onClose} text="Close" />
        <StyledButton onClick={handleSendMessage} text="Send" />
      </DialogActions>
    </Dialog>
  );
};

export default ChatWindow;
