import { ListItem, ListItemAvatar, ListItemText, Skeleton } from "@mui/material";

const SkeletonChatSection = () => {
    return (
            <ListItem>
              <ListItemAvatar>
                <Skeleton variant="circular" width={40} height={40} />
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton width={80} />}
                secondary={<Skeleton width={80} />}
              />
            </ListItem>
    );
  };
  
  export default SkeletonChatSection;