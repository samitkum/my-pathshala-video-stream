import React, { useContext } from "react";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import Grid from "@material-ui/core/Grid";
import VideoItem from "../videoItem/videoItem.component";

const VideoListGrid = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { videoLists } = pathshalaContext;
  return (
    <Grid container spacing={6} style={{ padding: "24px" }}>
      {videoLists.map(video => (
        <Grid
          key={video.id.videoId}
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "20px" }}
          zeroMinWidth
        >
          <VideoItem key={video.id.videoId} video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoListGrid;
