import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from "@mui/material";
import { infoMessage, warningMessage } from "../../services/toasts";
import { addUser, updateUser } from "../../store/users/users-thunks";
import StyledButton from "../../decorators/StyledButton";

const UserFormModal = ({ open, onClose, user = {}, mode: initialMode = "add" }) => {
  const [mode, setMode] = useState(initialMode);
  const isViewMode = mode === "view";
  const isEditMode = mode === "edit";

  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    birthDate: user.birthDate || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "",
  });

  const handleOpen = () => {
    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      birthDate: user.birthDate || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
    });
    setMode(initialMode)
  };

  useEffect(() => {
    if (open) handleOpen();
    // eslint-disable-next-line
  }, [open]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const handleEdit = () => {
    setMode("edit");
  };

  const handleClose = () => {
    onClose();
    setFormData({
      firstName: "",
      lastName: "",
      birthDate: "",
      email: "",
      phone: "",
      address: "",
    });
    setMode("view");
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.birthDate) newErrors.birthDate = "Date of Birth is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      warningMessage("Please fix the validation errors before submitting.");
      return;
    }
    const newUser = { id: nanoid(), ...formData };
    const updatedUser = { ...user, ...formData };
    isEditMode ? dispatch(updateUser({ id: user.id, user: updatedUser })) : dispatch(addUser(newUser));
    isEditMode
      ? infoMessage(`You have just updated the user with id: ${user.id}!`)
      : infoMessage("You have just created a new user!");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{isViewMode ? "User Details" : isEditMode ? "Edit User" : "Create New User"}</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={isViewMode}
            error={!!errors.firstName}
            helperText={errors.firstName}
            required
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={isViewMode}
            error={!!errors.lastName}
            helperText={errors.lastName}
            required
            fullWidth
          />
          <TextField
            label="Date of Birth"
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            disabled={isViewMode}
            error={!!errors.birthDate}
            helperText={errors.birthDate}
            InputLabelProps={{ shrink: true }}
            required
            fullWidth
          />
          <TextField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isViewMode}
            error={!!errors.email}
            helperText={errors.email}
            required
            fullWidth
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isViewMode}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={isViewMode}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 3 }}>
        <StyledButton text="Cancel" onClick={handleClose} />
        {isViewMode && <StyledButton text="Edit" onClick={handleEdit}/>}
        {isEditMode && <StyledButton text="Save" onClick={handleSubmit} />}
        {(mode === "add" && <StyledButton text="Submit" onClick={handleSubmit} />)}
      </DialogActions>
    </Dialog>
  );
};

export default UserFormModal;
