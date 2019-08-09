import React from "react";
import PropTypes from "prop-types";
import PlaylistItem from "./PlaylistItem/PlaylistItem";

const SongsSlider = ({ playlist, activeSongIndex, setActiveSongIndex }) => {
  const styles = {
    transform: `translateX(${(-activeSongIndex + 1) * 81.25 +
      -60 * activeSongIndex}px)`
  };
  return (
    <div className="songs-slider__container" style={styles}>
      {playlist.map((elem, index) => {
        return (
          <PlaylistItem
            key={elem.id}
            item={elem}
            setActiveSongIndex={() => setActiveSongIndex(index)}
            isActive={index === activeSongIndex}
          />
        );
      })}
    </div>
  );
};

SongsSlider.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      album: PropTypes.string,
      title: PropTypes.string,
      band: PropTypes.string,
      time: PropTypes.number,
      cover_img: PropTypes.string,
      background: PropTypes.string
    })
  ).isRequired,
  activeSongIndex: PropTypes.number.isRequired,
  setActiveSongIndex: PropTypes.func.isRequired
};

export default SongsSlider;
