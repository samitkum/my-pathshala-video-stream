import {
  SEARCH_VIDEO,
  CHANNEL_DATA,
  SELECTED_VIDEO,
  DISPLAY_VIDEO_GRIDLIST_TILE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_VIDEO:
      return {
        ...state,
        videoLists: action.payload,
        loading: false,
        selectedVideo: action.payload[0]
      };
    case CHANNEL_DATA:
      return {
        ...state,
        channel: action.payload
      };
    case SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload
      };
    case DISPLAY_VIDEO_GRIDLIST_TILE:
      return {
        ...state,
        displayVideoListTile: true
      };
    default:
      return state;
  }
};
