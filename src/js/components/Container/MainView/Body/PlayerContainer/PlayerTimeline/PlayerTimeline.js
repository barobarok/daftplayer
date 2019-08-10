import React from "react";
import PropTypes from "prop-types";
const PlayerTimeline = ({ currentTime, fullTime, timelineProgres }) => {
  return (
    <div className={"player-timeline__container"}>
      <div>{currentTime}</div>
      <div className={"player-timeline__timeline"}>
        <div
          style={{ width: `${timelineProgres}%` }}
          className="player-timeline__live-timeline"
        />
      </div>
      <div>{fullTime}</div>
    </div>
  );
};
PlayerTimeline.propsType = {
  currentTime: PropTypes.string.isRequired,
  fullTime: PropTypes.number.isRequired,
  timelineProgres: PropTypes.number.isRequired
};
export default PlayerTimeline;
