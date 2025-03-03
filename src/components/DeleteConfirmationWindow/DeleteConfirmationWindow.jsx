import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StyledButton from "../../decorators/StyledButton";

const DeleteConfirmationWindow = ({ isOpen, onConfirm, onCancel, itemId }) => {
  return (
    <Dialog open={isOpen} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        Delete Confirmation
        <IconButton onClick={onCancel} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete the post with ID: <strong>{itemId}</strong>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <StyledButton text="No" onClick={onCancel} />

        <StyledButton text="Yes" onClick={onConfirm} />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationWindow;
