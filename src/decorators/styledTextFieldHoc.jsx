const styledTextFieldHoc = (WrappedComponent) => {
  return (props) => (
    <WrappedComponent
      type="number"
      size="small"
      margin="dense"
      slotProps={{
        htmlInput: {
          min: 0,
        },
      }}
      sx={{
        "& .MuiInputLabel-root": {
          fontSize: "0.85rem",
        },
        "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiFormLabel-filled": {
          fontSize: "1rem",
          color: "var(--action-hover-color) !important",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--action-hover-color)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--action-hover-color) !important",
          },
        },
      }}
      {...props}
    />
  );
};

export default styledTextFieldHoc;
