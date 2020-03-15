import React, { useContext } from "react";
import { Typography, Paper } from "@material-ui/core";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import { withRouter } from "react-router-dom";
const VideoItem = ({ video, history, match }) => {
  const pathshalaContext = useContext(PathshalaContext);
  const { fetchVideo } = pathshalaContext;
  return (
    <Paper
      elevation={12}
      style={{
        padding: "10px",
        overflow: "hidden",
        cursor: "pointer",
        width: "100%",
        height: "100%"
      }}
      onClick={() => {
        fetchVideo(video);
        history.push("/video");
      }}
    >
      <img
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
      />
      <Typography variant="subtitle1">
        <b>{video.snippet.title}</b>
      </Typography>
    </Paper>
  );
};

export default withRouter(VideoItem);
