// import { useSelector } from "react-redux";
import { Box, Divider, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import SidePanelButton from "../SidePanelButton/SidePanelButton";
import UserInfo from "../UserInfo/UserInfo";
// import { selectLoader } from "../../store/posts/posts-selectors";
// import SkeletonSidePanel from "./SkeletonSidePanel";
import styles from "./SidePanel.module.css";

const SidePanel = () => {
  // const isLoading = useSelector(selectLoader);

  // if (isLoading) {
  //   return <SkeletonSidePanel />;
  // }

  return (
      <Box className={styles.sidePanel}>
        <UserInfo />

        <Divider variant="middle" flexItem />

        <Stack justifyContent={"space-between"} height={"100%"} width={"100%"} mt={3}>
          <Stack spacing={1}>
            <SidePanelButton icon={<HomeIcon />} text="Home Page" to={"/"} />
            <SidePanelButton icon={<MessageOutlinedIcon />} text="Comments" to={"/comments"} />
            <SidePanelButton icon={<QuestionAnswerOutlinedIcon />} text="Messages" to={"/messages"} />
          </Stack>

          <Stack spacing={1}>
            <SidePanelButton icon={<HelpOutlineIcon />} text="Help" to={"/help"} />
            <SidePanelButton icon={<SettingsIcon />} text="Settings" to={"/settings"} />
          </Stack>
        </Stack>
      </Box>
  );
};

export default SidePanel;
