import { styled } from "@material-ui/core/styles";
import { Box, GridList, GridListTile, Typography } from "@material-ui/core";

export const MyBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflow: "hidden",
  backgroundColor: "#1f1f14",
  color: "white"
});
export const MyGridList = styled(GridList)({
  width: "100%"
});
export const MyGridListTile = styled(GridListTile)({
  backgroundColor: "inherit",
  cursor: "pointer"
});
export const MyTypography = styled(Typography)({
  width: "100%",
  height: "100%",
  fontSize: "10px"
});
