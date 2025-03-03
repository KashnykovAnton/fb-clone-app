import { useSelector } from "react-redux";
import { Box, List, Typography } from "@mui/material";
import PageMessagesItem from "../PageMessagesItem/PageMessagesItem";
import { selectLoader, selectMessages } from "../../store/profile/profile-selectors";
import SkeletonPageMessagesList from "./SkeletonPageMessagesList";

const PageMessagesList = () => {
  const chatMessages = useSelector(selectMessages);
  const isLoading = useSelector(selectLoader); // Selector for the loading state

  if (isLoading) {
    return <SkeletonPageMessagesList />;
  }

  return (
    <Box sx={{ maxWidth: 600, p: 3, backgroundColor: "white", borderRadius: "16px" }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        My chat messages
      </Typography>

      <List>
        {chatMessages.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            No messages yet.
          </Typography>
        ) : (
          chatMessages.map((message, index) => (
            <PageMessagesItem key={index} index={index} message={message} length={chatMessages.length} />
          ))
        )}
      </List>
    </Box>
  );
};

export default PageMessagesList;
