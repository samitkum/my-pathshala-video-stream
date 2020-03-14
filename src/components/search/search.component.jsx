import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import YoutubeApi from "../../api/youtube.api";
import "./search.styles.scss";
import youtubeApi from "../../api/youtube.api";

class Search extends Component {
  state = {
    searchItem: "",
    channel: {},
    videoLists: []
  };

  async componentDidMount() {
    // get the Channel Id
    let channelData = await YoutubeApi.get("search", {
      params: {
        part: "snippet",
        //key: "AIzaSyD-zXrbWFvdeYR7yJ1N5usF8MQYhbXDyqE",
        type: "channel",
        q: "mypathshala"
      }
    });
    // get the video details by using the Channel Id
    this.setState({ channel: channelData.data.items[0].snippet });
  }
  handleSubmit = async e => {
    e.preventDefault();
    let response = await youtubeApi.get("search", {
      params: {
        part: "snippet",
        //key: "AIzaSyD-zXrbWFvdeYR7yJ1N5usF8MQYhbXDyqE",
        channelId: this.state.channel.channelId,
        type: "video",
        maxResults: "5",
        q: this.state.searchItem
      }
    });
    this.setState({ videoLists: response.data.items, searchItem: "" });
  };

  handleChange = e => {
    this.setState({ searchItem: e.target.value });
  };

  render() {
    console.log(this.state.videoLists);
    return (
      <Paper elevation={6} className="searchContainer">
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.handleChange}
            value={this.state.search}
          />
        </form>
      </Paper>
    );
  }
}

export default Search;
