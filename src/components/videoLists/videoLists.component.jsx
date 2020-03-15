import React, { useContext, useEffect } from "react";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import Grid from "@material-ui/core/Grid";
import VideoItem from "../videoItem/videoItem.component";
import Spinner from "../Spinner/Spinner";
const VideoLists = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { videoLists, loading, fetchChannelData } = pathshalaContext;
  useEffect(() => {
    fetchChannelData();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <Grid container spacing={10} style={{ padding: "24px" }}>
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
        >
          <VideoItem key={video.id.videoId} video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoLists;

// const listOfVideos = (
//   <GridList cols={1} style={{ width: "90%", height: "70vw" }}>
//     {videoLists.map(video => (
//       <GridListTile
//         key={video.id.videoId}
//         subtitle={
//           <span>
//             by <strong>Hello</strong>
//           </span>
//         }
//         onClick={() => fetchVideo(video)}
//       >
//         <img alt="video_img" src={video.snippet.thumbnails.medium.url} />
//       </GridListTile>
//     ))}
//   </GridList>
// );
