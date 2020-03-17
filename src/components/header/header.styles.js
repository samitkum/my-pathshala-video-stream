import AppBar from "@material-ui/core/AppBar";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export const MyLink = styled(Link)({
  marginRight: "16px",
  color: "white",
  textDecoration: "none",
  fontSize: "1.2vw"
});
export const MyAppBar = styled(AppBar)({
  backgroundColor: "#000000",
  color: "white",
  padding: "0px 20px"
});
export const MyTypography = styled(Typography)({
  fontSize: "1.2vw"
});
