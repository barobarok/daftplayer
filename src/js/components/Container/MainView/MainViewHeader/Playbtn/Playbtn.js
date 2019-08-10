import React from "react";
import MainBtn from "../../Body/PlayerContainer/PlayerControls/Btns/MainBtn";
import PropTypes from "prop-types";
const Playbtn = ({ play, controlPlaySong }) => {
  return (
    <div className="header-btn__container header-play-btn__container">
      <MainBtn isActive={play} func={controlPlaySong} />
    </div>
  );
};
Playbtn.propTypes = {
  play: PropTypes.bool.isRequired,
  controlPlaySong: PropTypes.func.isRequired
};
export default Playbtn;
