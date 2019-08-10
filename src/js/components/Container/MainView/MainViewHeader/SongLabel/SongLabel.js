import React from "react";
import PropTypes from "prop-types";
const SongLabel = ({ title, band }) => {
  return (
    <div className="header-song-label__container">
      <p className="header-song-label__title">{title}</p>
      <p className="header-song-label__band">{band}</p>
    </div>
  );
};
SongLabel.propTypes = {
  title: PropTypes.string.isRequired,
  band: PropTypes.string.isRequired
};
export default SongLabel;
