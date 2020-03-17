import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import Grid from "@material-ui/core/Grid";
import {
  MyBox,
  MyGridList,
  MyTypography,
  MyGridListTile
} from "./videoListGridTiles.styles";

const VideListGridTile = ({ history }) => {
  const pathshalaContext = useContext(PathshalaContext);
  const { videoLists, fetchVideo } = pathshalaContext;
  return (
    <MyBox>
      <MyGridList cols={1}>
        {videoLists.map(video => (
          <MyGridListTile
            style={{ height: "auto" }}
            key={video.id.videoId}
            cols={1}
            onClick={() => {
              fetchVideo(video);
              history.push("/");
            }}
          >
            <Grid container style={{ overflow: "hidden" }}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt="hell"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <MyTypography variant="h6">
                      {video.snippet.title}
                    </MyTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </MyGridListTile>
        ))}
      </MyGridList>
    </MyBox>
  );
};

export default withRouter(VideListGridTile);
