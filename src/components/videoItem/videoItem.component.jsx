import React, { useContext } from "react";
import { MyPaper } from "./videoItem.styles";
import Typography from "@material-ui/core/Typography";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import { withRouter } from "react-router-dom";
const VideoItem = ({ video, history }) => {
  const pathshalaContext = useContext(PathshalaContext);
  const { fetchVideo } = pathshalaContext;
  return (
    <MyPaper
      elevation={12}
      onClick={() => {
        fetchVideo(video);
        history.push("/videoPlayer");
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
    </MyPaper>
  );
};

export default withRouter(VideoItem);
