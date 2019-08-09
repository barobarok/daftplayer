import React from "react";
import PropTypes from "prop-types";
const SongBackground = ({ backgroundUrl }) => {
  const background = {
    backgroundImage: `linear-gradient(to top, rgba(27, 27, 27,1), rgba(27, 27, 27, 0.8)),url(${require(`../../../../../imgs//bgs/${backgroundUrl}`)})`
  };
  return <div style={background} className="playlist-item__background" />;
};
SongBackground.propTypes = {
  backgroundUrl: PropTypes.string.isRequired
};
export default SongBackground;
