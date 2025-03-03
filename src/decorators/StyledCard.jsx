import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  maxWidth: 800,
  cursor: "pointer",
  boxShadow: "none",
  border: "1px solid var(--border-color)",
  borderRadius: 12,
}));
export default StyledCard;
