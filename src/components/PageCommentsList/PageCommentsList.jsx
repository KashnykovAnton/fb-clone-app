import { useSelector } from "react-redux";
import { Box, List, Typography } from "@mui/material";
import PageCommentsItem from "../PageCommentsItem/PageCommentsItem";
import { selectComments, selectLoader } from "../../store/profile/profile-selectors";
import SkeletonPageCommentsList from "./SkeletonPageCommentsList";

const PageCommentsList = () => {
  const commentMessages = useSelector(selectComments);
  const isLoading = useSelector(selectLoader);

  if (isLoading) {
    return <SkeletonPageCommentsList />;
  }

  return (
    <Box sx={{ maxWidth: 600, p: 3, backgroundColor: "white", borderRadius: "16px" }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        My Comments
      </Typography>

      <List>
        {commentMessages.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            No comments yet.
          </Typography>
        ) : (
          commentMessages.map((comment, index) => <PageCommentsItem key={index} index={index} comment={comment} length={commentMessages.length}/>)
        )}
      </List>
    </Box>
  );
};

export default PageCommentsList;
