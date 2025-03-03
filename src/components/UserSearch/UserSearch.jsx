import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import { setSearchResult } from "../../store/users/users-slice-filter";

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const result = e.target.value;
    setSearchValue(result);
    dispatch(setSearchResult(result));
  };

  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      placeholder="Search by First Name, Last Name, or Email"
      value={searchValue}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        sx: {
          fontSize: "0.875rem",
          width: "500px",
          ml: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
        },
      }}
    />
  );
};

export default UserSearch;
