import React from "react";
import PropTypes from "prop-types";

const MainBtn = ({ isActive, func }) => {
  return (
    <div className="player-main-btn__container">
      <div className="player-main-btn__clickarea" onClick={func} />
      {isActive ? (
        <img
          className="player-main-btn--active"
          src={`${require(`./Play_active.png`)}`}
        />
      ) : (
        <img
          className="player-main-btn"
          src={`${require(`./Play_inactive.png`)}`}
        />
      )}
    </div>
  );
};
MainBtn.propTypes = {
  isActive: PropTypes.bool,
  func: PropTypes.func.isRequired
};
export default MainBtn;
