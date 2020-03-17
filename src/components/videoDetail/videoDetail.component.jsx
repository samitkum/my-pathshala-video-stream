import React, { useContext } from "react";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import Typography from "@material-ui/core/Typography";
import {
  MyTypography,
  MyPaperFrame,
  MyPaperDescription
} from "./videoDetail.styles";

const VideoDetails = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { selectedVideo } = pathshalaContext;
  try {
    var video_src = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  } catch (err) {
    console.log(err.message);
    return (
      <div style={{ padding: "24px" }}>
        <Typography variant="h6" style={{ fontSize: "2vw" }}>
          No video Found with the search content
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <MyPaperFrame elevation={6}>
        <iframe
          tabIndex="-1"
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={video_src}
          style={{ overflow: "hidden", objectFit: "contain" }}
          allowFullScreen
        />
      </MyPaperFrame>
      <MyPaperDescription>
        <MyTypography variant="h6">
          {selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle}
        </MyTypography>
        <Typography variant="subtitle1">
          {selectedVideo.snippet.channelTitle}
        </Typography>
      </MyPaperDescription>
    </div>
  );
};

export default VideoDetails;
