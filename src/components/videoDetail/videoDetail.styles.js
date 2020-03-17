import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
export const MyTypography = styled(Typography)({
  fontSize: "2vw"
});

export const MyPaperFrame = styled(Paper)({
  width: "100%",
  height: "30vw",
  position: "relative",
  overflow: "hidden",
  zIndex: "0",
  outline: "0"
});

export const MyPaperDescription = styled(Paper)({
  padding: "15px",
  backgroundColor: "#1f1f14",
  color: "white",
  boxShadow: "No"
});
