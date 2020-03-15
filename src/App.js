import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import About from "./pages/About/about.component";
import Homepage from "./pages/homepage/homepage.component";
import VideoList from "./components/videoLists/videoLists.component";
import PathshalaState from "./context/pathshala/pathshala.state";
import SearchBar from "./components/search/search.component";

const App = () => {
  return (
    <PathshalaState>
      <Router>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/" component={VideoList} />
              <Route exact path="/about" component={About} />
              <Route exact path="/video" component={Homepage} />
            </Switch>
          </Grid>
          <Grid item xs={12}>
            Footer
          </Grid>
        </Grid>
      </Router>
    </PathshalaState>
  );
};

export default App;
