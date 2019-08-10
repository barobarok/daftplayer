import React, { useContext } from "react";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerTimeline from "./PlayerTimeline/PlayerTimeline";
import AppContext from "../../../../../AppContext";

const PlayerContainer = ({}) => {
  const context = useContext(AppContext);
  const { timeParser, currenttime, playlist, currentSongId } = context;
  return (
    <div>
      <PlayerControls />
      <PlayerTimeline
        timelineProgres={(currenttime * 100) / playlist[currentSongId].time}
        currentTime={timeParser(currenttime.toString())}
        fullTime={timeParser(playlist[currentSongId].time)}
      />
    </div>
  );
};

export default PlayerContainer;
