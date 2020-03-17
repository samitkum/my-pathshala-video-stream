import React, { useState, useContext } from "react";

import "./search.styles.js";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import { MyPaper, MyTextField } from "./search.styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiInputBase-input": { color: "#ccccb3", fontStyle: "inherit" },
    "& .MuiFormLabel-root": { color: "#000000" },
    "& .MuiInput-underline:after": { borderBottomColor: "#000000" }
  }
}));
const Search = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { channel, searchVideos } = pathshalaContext;
  const [searchItem, setSearchItem] = useState("");
  const classes = useStyles();

  // Submit the search Item to fetch the details
  const handleSubmit = e => {
    e.preventDefault();
    if (!searchItem) {
      return alert("hell");
    } else {
      pathshalaContext.loading = true;
      searchVideos(searchItem, channel.channelId);
      setSearchItem("");
    }
  };

  const handleChange = e => {
    setSearchItem(e.target.value);
  };

  return (
    <MyPaper elevation={6}>
      <form onSubmit={handleSubmit} className={classes.root}>
        <MyTextField
          fullWidth
          label="Search MyPathshala Courses..."
          onChange={handleChange}
          value={searchItem}
        />
      </form>
    </MyPaper>
  );
};

export default Search;
