import React from "react";
import PropTypes from "prop-types";
const PlayerTimeline = ({ currentTime, fullTime }) => {
  return (
    <div className={"player-timeline__container"}>
      <div>{currentTime}</div>
      <div className={"player-timeline__timeline"}>
        <div
          style={{ width: `${(currentTime * 100) / fullTime}%` }}
          className="player-timeline__live-timeline"
        />
      </div>
      <div>{fullTime}</div>
    </div>
  );
};
PlayerTimeline.propsType = {
  currentTime: PropTypes.number.isRequired,
  fullTime: PropTypes.number.isRequired
};
export default PlayerTimeline;
