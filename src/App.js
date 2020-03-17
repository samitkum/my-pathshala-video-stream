import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import About from "./pages/about/about.component";
import Homepage from "./pages/homepage/homepage.component";
import PathshalaState from "./context/pathshala/pathshala.state";
import env from "dotenv";
const App = () => {
  env.config();
  return (
    <PathshalaState>
      <Router>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header />
          </Grid>

          <Grid item xs={12}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about" component={About} />
              <Route path="/" component={Homepage} />
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </PathshalaState>
  );
};

export default App;
