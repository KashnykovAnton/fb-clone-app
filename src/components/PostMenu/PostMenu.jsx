import { Menu, MenuItem } from "@mui/material";

const PostMenu = ({ anchor, onClose, onViewClick, onEditClick, onDeleteClick }) => {
  return (
    <Menu
      anchorEl={anchor}
      open={Boolean(anchor)}
      onClose={onClose}
      slotProps={{
        paper: {
          style: {
            width: "100px",
          },
        },
      }}
    >
      <MenuItem onClick={onViewClick}>View</MenuItem>
      <MenuItem onClick={onEditClick}>Edit</MenuItem>
      <MenuItem onClick={onDeleteClick}>Delete</MenuItem>
    </Menu>
  );
};

export default PostMenu;
