import { useState } from "react";
import { useDispatch } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Collapse,
  Fade,
} from "@mui/material";
import PostMenu from "../PostMenu/PostMenu";
import UserFormModal from "../UserFormModal/UserFormModal";
import DeleteConfirmationWindow from "../DeleteConfirmationWindow/DeleteConfirmationWindow";
import { infoMessage, warningMessage } from "../../services/toasts";
import { deleteUser, updateUser } from "../../store/users/users-thunks";
import StyledButton from "../../decorators/StyledButton";

const UserItem = ({ user, index, length }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view");
  const [showDetails, setShowDetails] = useState(user.isFriend);

  const dispatch = useDispatch();

  const handlAskFriend = () => {
    const updatedUser = {
      ...user,
      nickname: `${(user.firstName + user.lastName).toLowerCase()}`,
      avatar: `https://i.pravatar.cc/200?img=${Math.floor(Math.random() * 70) + 1}`,
      isFriend: true,
    };
    setTimeout(() => {
      dispatch(updateUser({ id: user.id, user: updatedUser }));
      infoMessage(`Friend ${user.firstName} ${user.lastName} accept your request for friendship`);
      setShowDetails(true);
    }, 2000);
  };

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
      <ListItem alignItems="flex-start" sx={{ position: "relative", flexDirection: "column", alignItems: "stretch" }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <ListItemAvatar>
            <Avatar src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
          </ListItemAvatar>
          <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
            secondary={
              <Fade in={showDetails} timeout={500}>
                <Box sx={{ display: showDetails ? "block" : "none" }}>
                  <Typography variant="body2">
                    <strong>Email:</strong> {user.email} <br />
                    <strong>Phone:</strong> {user.phone} <br />
                    <strong>Address:</strong> {user.address} <br />
                    <strong>Date of Birth:</strong> {new Date(user.birthDate).toLocaleDateString()}
                  </Typography>
                </Box>
              </Fade>
            }
          />
          <IconButton aria-label="user options" onClick={handleMenuOpen} sx={{ ml: "auto" }}>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <PostMenu
          anchor={anchorEl}
          onClose={handleMenuClose}
          onViewClick={handleViewClick}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />

        {!showDetails ? (
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 1 }}>
            <StyledButton onClick={handlAskFriend} text="Ask for friendship" />
          </Box>
        ) : null}
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
