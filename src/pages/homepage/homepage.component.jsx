import React, { useContext, lazy, Suspense, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import VideoDetail from "../../components/videoDetail/videoDetail.component";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/search/search.component";
const VideoLists = lazy(() =>
  import("../../components/videoLists/videoLists.component")
);

const Homepage = () => {
  useEffect(() => {
    pathshalaContext.fetchChannelData();
    // eslint-disable-next-line
  }, []);
  const pathshalaContext = useContext(PathshalaContext);
  const { loading } = pathshalaContext;

  return (
    <Grid container spacing={2} style={{ padding: "10px 35px" }}>
      <Grid item xs={12} style={{ padding: "0px 30px" }}>
        <SearchBar />
      </Grid>
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
                <Suspense fallback={<Spinner />}>
                  <VideoLists />
                </Suspense>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Homepage;
