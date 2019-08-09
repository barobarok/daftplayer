import React from "react";
import PropTypes from "prop-types";
const CurrentSongData = ({ title, band }) => {
  return (
    <div className="current-song__container">
      <p className="current-song__title">{title}</p>
      <p className="current-song__band">{band}</p>
    </div>
  );
};
CurrentSongData.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    band: PropTypes.string.isRequired
  })
};
export default CurrentSongData;
