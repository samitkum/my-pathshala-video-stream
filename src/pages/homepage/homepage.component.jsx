import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../../components/search/search.component";

const Homepage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={8}>
        Video Player
      </Grid>
      <Grid item xs={4}>
        Video List
      </Grid>
    </Grid>
  );
};

export default Homepage;
