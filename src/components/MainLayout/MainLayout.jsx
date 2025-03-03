import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SidePanel from "../SidePanel/SidePanel";
import ChatSection from "../ChatSection/ChatSection";

const MainLayout = () => {
  return (
    <Box display="flex">
      <SidePanel />
      <Outlet />
      <ChatSection />
    </Box>
  );
};

export default MainLayout;
