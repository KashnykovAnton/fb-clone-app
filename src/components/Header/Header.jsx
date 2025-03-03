import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RecommendIcon from "@mui/icons-material/Recommend";
import { AppBar, Avatar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import AddPost from "../AddPost/AddPost";
import UserSearch from "../UserSearch/UserSearch";
import { selectProfile } from "../../store/profile/profile-selectors";
// import { selectLoader } from "../../store/posts/posts-selectors";
// import HeaderSkeleton from "./HeaderSkeleton";

const Header = () => {
  const { avatar, nickname } = useSelector(selectProfile);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [navigateToAdmin, setNavigateToAdmin] = useState(false);

  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";
  // const isLoading = useSelector(selectLoader);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (!anchorEl && navigateToAdmin) {
      setNavigateToAdmin(false);
      navigate("/admin");
    }
  }, [anchorEl, navigate, navigateToAdmin]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAdminView = () => {
    handleMenuClose();
    setTimeout(() => {
      navigate("/admin");
    }, 100);
  };

  // if (isLoading) {
  //   return <HeaderSkeleton />;
  // }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "var(--action-color)", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Stack direction="row" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={2}>
            <RecommendIcon fontSize={"large"} />
            <Typography variant="h6" fontWeight={700} minWidth="160px">
              Social Network
            </Typography>
          </Stack>
          {isAdminPage ? <UserSearch /> : <AddPost />}
        </Stack>

        <Stack direction="row" gap={1}>
          <Avatar src={avatar} alt={nickname} />
          <IconButton onClick={handleMenuOpen} sx={{ color: "white" }} aria-controls={open ? "basic-menu" : undefined}>
            <MoreVertIcon />
          </IconButton>
        </Stack>

        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem onClick={handleAdminView}>Admin View</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
