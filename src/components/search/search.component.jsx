import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "./search.styles.scss";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import MediaCard from "../Error/Error.component";

const Search = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { channel, searchVideos } = pathshalaContext;
  const [searchItem, setSearchItem] = useState("");

  // Submit the search Item to fetch the details
  const handleSubmit = e => {
    e.preventDefault();
    if (!searchItem) {
      return <MediaCard />;
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
    <Paper elevation={6} className="searchContainer">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={handleChange}
          value={searchItem}
        />
      </form>
    </Paper>
  );
};

export default Search;
