import { useState } from "react";
import { useDispatch } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider, IconButton } from "@mui/material";
import PostMenu from "../PostMenu/PostMenu";
import UserFormModal from "../UserFormModal/UserFormModal";
import DeleteConfirmationWindow from "../DeleteConfirmationWindow/DeleteConfirmationWindow";
import { warningMessage } from "../../services/toasts";
import { deleteUser } from "../../store/users/users-thunks";

const UserItem = ({ user, index, length }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view");
  const dispatch = useDispatch();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewClick = () => {
    setModalMode("view");
    setIsModalOpen(true);
    handleMenuClose();
  };

  const handleEditClick = () => {
    setModalMode("edit");
    setIsModalOpen(true);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
    handleMenuClose();
  };

  const handleConfirmDelete = () => {
    dispatch(deleteUser(user.id));
    setIsDialogOpen(false);
    warningMessage(`User with ID: ${user.id} was deleted`);
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box key={user.id}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
        </ListItemAvatar>
        <ListItemText
          primary={`${user.firstName} ${user.lastName}`}
          secondary={
            <Typography variant="body2">
              <strong>Email:</strong> {user.email} <br />
              <strong>Phone:</strong> {user.phone} <br />
              <strong>Address:</strong> {user.address} <br />
              <strong>Date of Birth:</strong> {new Date(user.birthDate).toLocaleDateString()}
            </Typography>
          }
        />
        <IconButton aria-label="user options" onClick={handleMenuOpen} sx={{ position: "absolute", top: 8, right: 8 }}>
          <MoreVertIcon />
        </IconButton>

        <PostMenu
          anchor={anchorEl}
          onClose={handleMenuClose}
          onViewClick={handleViewClick}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      </ListItem>
      {index < length - 1 && <Divider variant="inset" component="li" />}

      <DeleteConfirmationWindow
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        itemId={user.id}
      />

      <UserFormModal open={isModalOpen} onClose={() => setIsModalOpen(false)} mode={modalMode} user={user} />
    </Box>
  );
};

export default UserItem;
