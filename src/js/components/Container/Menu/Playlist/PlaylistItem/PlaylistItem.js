import React from "react";
import PropTypes from "prop-types";
const PlaylistItem = ({ elem, time, func }) => {
  return (
    <div className="playlist-menu__item" onClick={func}>
      <div className="playlist-menu__item-right">
        <div className="playlist-menu__item-id">{elem.id}</div>
        <div className="playlist-menu__item-title">{elem.title}</div>
      </div>

      <div className="playlist-menu__item-dots" />
      <div className="playlist-menu__item-time">{time}</div>
    </div>
  );
};
PlaylistItem.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.number,
    album: PropTypes.string,
    title: PropTypes.string,
    band: PropTypes.string,
    time: PropTypes.number,
    cover_img: PropTypes.string,
    background: PropTypes.string
  }).isRequired,
  func: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired
};
export default PlaylistItem;
