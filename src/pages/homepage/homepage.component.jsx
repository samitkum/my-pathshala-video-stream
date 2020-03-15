import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import VideoDetail from "../../components/videoDetail/videoDetail.component";
import VideoLists from "../../components/videoLists/videoLists.component";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import "./homepage.style.scss";
import Spinner from "../../components/Spinner/Spinner";
const Homepage = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { loading } = pathshalaContext;

  return (
    <Grid container spacing={4} style={{ padding: "10px 35px" }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid container>
              <Grid item xs={12}>
                <VideoLists />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Homepage;
