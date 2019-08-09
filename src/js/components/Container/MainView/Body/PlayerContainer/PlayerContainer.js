import React from "react";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerTimeline from "./PlayerTimeline/PlayerTimeline";

const PlayerContainer = ({}) => {
  return (
    <div>
      <PlayerControls />
      <PlayerTimeline currentTime={23} fullTime={183} />
    </div>
  );
};

export default PlayerContainer;
