import React, { useReducer } from "react";
import PathshalaReducer from "./pathshala.reducer";
import PathshalaContext from "./pathshala.context";
import {
  SEARCH_VIDEO,
  CHANNEL_DATA,
  SELECTED_VIDEO,
  DISPLAY_VIDEO_GRIDLIST_TILE
} from "../types";
import YoutubeApi from "../../api/youtube.api";

const PathshalaState = props => {
  const initialState = {
    searchItem: "",
    videoLists: [],
    channel: {},
    selectedVideo: null,
    loading: true,
    displayVideoListTile: false
  };

  const [state, dispatch] = useReducer(PathshalaReducer, initialState);

  const searchVideos = async (searchItem, channelId) => {
    try {
      let response = await YoutubeApi.get("search", {
        params: {
          part: "snippet",
          key: "AIzaSyARBM1Oz31c6cOd9gBTmLrZw2OuGr7xruI",
          channelId: channelId,
          type: "video",
          maxResults: "10",
          q: searchItem
        }
      });
      dispatch({
        type: SEARCH_VIDEO,
        payload: response.data.items
      });
    } catch (err) {
      console.log("failed while fetching the video details");
    }
  };

  const fetchChannelData = async () => {
    try {
      let channelData = await YoutubeApi.get("search", {
        params: {
          part: "snippet",
          key: "AIzaSyARBM1Oz31c6cOd9gBTmLrZw2OuGr7xruI",
          type: "channel",
          q: "mypathshala"
        }
      });
      dispatch({
        type: CHANNEL_DATA,
        payload: channelData.data.items[0].snippet
      });
      if (state.videoLists.length === 0) {
        searchVideos("ssc", channelData.data.items[0].snippet.channelId);
      }
    } catch (err) {
      console.log("failed while fetching the channel details");
    }
  };

  const fetchVideo = video => {
    dispatch({
      type: SELECTED_VIDEO,
      payload: video
    });
  };

  const displayVideoGridListTile = () => {
    dispatch({
      type: DISPLAY_VIDEO_GRIDLIST_TILE
    });
  };
  return (
    <PathshalaContext.Provider
      value={{
        searchItem: state.searchItem,
        videoLists: state.videoLists,
        channel: state.channel,
        selectedVideo: state.selectedVideo,
        loading: state.loading,
        displayVideoListTile: state.displayVideoListTile,
        searchVideos,
        fetchChannelData,
        fetchVideo,
        displayVideoGridListTile
      }}
    >
      {props.children}
    </PathshalaContext.Provider>
  );
};

export default PathshalaState;
