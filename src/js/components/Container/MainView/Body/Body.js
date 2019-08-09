import React from "react";
import SongsContainer from "./SongsContainer/SongsContainer";
import PlayerContainer from "./PlayerContainer/PlayerContainer";
const Body = ({}) => {
  return (
    <div className="main-body__container">
      <SongsContainer />
      <PlayerContainer />
    </div>
  );
};

export default Body;
