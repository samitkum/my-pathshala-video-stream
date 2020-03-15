import React, { useContext } from "react";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const VideoDetails = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { selectedVideo } = pathshalaContext;
  try {
    var video_src = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  } catch (err) {
    console.log(err.message);
    return <div>No video Found with the search content</div>;
  }

  return (
    <div>
      <Paper elevation={6} style={{ width: "100%", height: "20vw" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={video_src}
        />
      </Paper>
      <hr />
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {selectedVideo.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {selectedVideo.snippet.description}
        </Typography>
      </Paper>
    </div>
  );
};

export default VideoDetails;
