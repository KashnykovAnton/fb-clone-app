import { Box, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Typography } from "@mui/material";
import styles from "./ChatSection.module.css";

const SkeletonChatSection = () => {
    return (
      <Box className={styles.chatSection}>
        <Typography variant="h6">
          <Skeleton width={100} />
        </Typography>
        <List className={styles.friendList}>
          {[...Array(3)].map((_, index) => (
            <ListItem className={styles.friendItem} key={index}>
              <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton width={120} />}
                secondary={<Skeleton width={80} />}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  
  export default SkeletonChatSection;