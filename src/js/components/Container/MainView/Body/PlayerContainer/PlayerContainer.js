import React from "react";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerTimeline from "./PlayerTimeline/PlayerTimeline";
import { useAppContext } from "../../../../../AppContext";

const PlayerContainer = ({}) => {
  const context = useAppContext();
  const { timeParser, currenttime, playlist, currentSongId } = context;
  return (
    <div className="player__container">
      <PlayerControls />
      <PlayerTimeline
        timelineProgres={(currenttime * 100) / playlist[currentSongId].time}
        currentTime={timeParser(currenttime)}
        fullTime={timeParser(playlist[currentSongId].time)}
      />
    </div>
  );
};

export default PlayerContainer;
