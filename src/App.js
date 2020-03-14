import React from "react";
import Header from "./components/header/header.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import About from "./pages/About/about.component";
import Homepage from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <Router>
      <Grid container justify="center" alignItems="center" spacing={10}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Header />
            </Grid>
          </Grid>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route path="/" component={Homepage} />
          </Switch>
          <Grid item xs={12}>
            Footer
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
