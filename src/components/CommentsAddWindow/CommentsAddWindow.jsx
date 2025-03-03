import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import StyledButton from "../../decorators/StyledButton";
import { validateCommentText, charactersLength } from "../../helpers/validation";
import { warningMessage } from "../../services/toasts";

const CommentsAddWindow = ({ isOpen, onClose, onPost, value, onChange }) => {
  const isValid = validateCommentText(value);

  const handlePostComment = () => {
    if (value.trim().length !== 0) {
      isValid ? warningMessage("Please fix the validation errors before submitting.") : onPost();
    } else {
      warningMessage("Please enter a comment before submitting.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add a Comment</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          rows={3}
          fullWidth
          variant="outlined"
          placeholder="Type your comment here..."
          value={value}
          onChange={onChange}
          error={isValid}
          helperText={
            isValid
              ? `The description must be 40 characters or fewer. ${charactersLength(value)} characters now.`
              : `You have entered ${charactersLength(value)} characters from 40.`
          }
          sx={{
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
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={onClose} text="Cancel" />

        <StyledButton onClick={handlePostComment} text="Add" />
      </DialogActions>
    </Dialog>
  );
};

export default CommentsAddWindow;
