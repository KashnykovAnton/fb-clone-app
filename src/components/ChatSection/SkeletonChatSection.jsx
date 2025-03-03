import { ListItem, ListItemAvatar, ListItemText, Skeleton } from "@mui/material";
import styles from "./ChatSection.module.css";

const SkeletonChatSection = () => {
    return (
            <ListItem className={styles.friendItem}>
              <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton width={120} />}
                secondary={<Skeleton width={80} />}
              />
            </ListItem>
    );
  };
  
  export default SkeletonChatSection;