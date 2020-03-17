import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const About = () => {
  return (
    <Box style={{ padding: "30px" }}>
      <Typography variant="h4" style={{ fontSize: "4vw" }}>
        About Page
      </Typography>
      <Typography variant="h6" style={{ fontSize: "2vw" }}>
        My Pathshala provides you the best courses given by one of the best
        tutors.
      </Typography>
    </Box>
  );
};

export default About;
