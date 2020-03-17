import React, { useContext } from "react";
import PathshalaContext from "../../context/pathshala/pathshala.context";
import VideListGridTile from "../videoListGridTiles/videoListGridTiles.component";
import Spinner from "../spinner/Spinner";

const VideoLists = () => {
  const pathshalaContext = useContext(PathshalaContext);
  const { loading } = pathshalaContext;

  if (loading) {
    return <Spinner />;
  }

  return <VideListGridTile />;
};

export default VideoLists;
