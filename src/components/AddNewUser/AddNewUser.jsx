import { useState } from "react";
import { Button, Box } from "@mui/material";
import UserFormModal from "../UserFormModal/UserFormModal";

const AddNewUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          color: "white",
          backgroundColor: "#426de6",
          borderRadius: "12px",
          width: "120px",
          "&:hover": {
            backgroundColor: "#173eae",
          },
        }}
      >
        Create New User
      </Button>

      <UserFormModal open={isModalOpen} onClose={handleClose}/>
    </Box>
  );
};

export default AddNewUser;
