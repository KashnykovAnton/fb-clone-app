import { Box, TextField, MenuItem, Select, FormControl, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, selectLoader } from "../../store/posts/posts-selectors";
import { setCommentsFilter, setLikesFilter, setSort } from "../../store/posts/posts-slice-filter";
import StyledCard from "../../decorators/StyledCard";
import styledTextFieldHoc from "../../decorators/styledTextFieldHoc";
import SkeletonFilterSort from "./SkeletonFilterSort";

const FilterSort = () => {
  const dispatch = useDispatch();
  const { likesFilter, commentsFilter, sort } = useSelector(selectFilters);
  const isLoading = useSelector(selectLoader)

  const handleLikesChange = (e) => {
    const { name, value } = e.target;
    dispatch(setLikesFilter({ ...likesFilter, [name]: value ? Number(value) : 0 }));
  };

  const handleCommentsChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCommentsFilter({ ...commentsFilter, [name]: value ? Number(value) : 0 }));
  };

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    dispatch(setSort({ ...sort, [name]: value }));
  };

  const CustomTextField = styledTextFieldHoc(TextField);

  if (isLoading) {
    return <SkeletonFilterSort/>;
  }

  return (
    <StyledCard>
      <Box flex={1} display="flex" gap={2} alignItems="center" p={2}>
        {/* Likes Filter */}
        <Box flexBasis="30%">
          <Typography variant="subtitle2">Filter by likes</Typography>
          <CustomTextField label="Min Likes" name="min" value={likesFilter.min || ""} onChange={handleLikesChange} />
          <CustomTextField label="Max Likes" name="max" value={likesFilter.max || ""} onChange={handleLikesChange} />
        </Box>

        {/* Comments Filter */}
        <Box flexBasis="30%">
          <Typography variant="subtitle2">Filter by comments</Typography>
          <CustomTextField
            label="Min Comments"
            name="min"
            value={commentsFilter.min || ""}
            onChange={handleCommentsChange}
          />
          <CustomTextField
            label="Max Comments"
            name="max"
            value={commentsFilter.max || ""}
            onChange={handleCommentsChange}
          />
        </Box>
        <Box flexBasis="40%">
          <Typography variant="subtitle2">Sorting</Typography>
          <Stack direction="column">
            <FormControl margin="dense" size="small">
              <Select
                name="field"
                value={sort.field || ""}
                onChange={handleSortChange}
                sx={{
                  fontSize: "0.85rem",
                  height: "40px",
                }}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Sort By</em>
                </MenuItem>
                <MenuItem value="likes">Likes</MenuItem>
                <MenuItem value="comments">Comments</MenuItem>
              </Select>
            </FormControl>

            <FormControl margin="dense" size="small">
              <Select
                name="order"
                value={sort.order || ""}
                onChange={handleSortChange}
                sx={{ fontSize: "0.85rem", height: "40px" }}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Order</em>
                </MenuItem>
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>
      </Box>

      {/* Sorting */}
    </StyledCard>
  );
};

export default FilterSort;
