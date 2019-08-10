import React from "react";
import PropTypes from "prop-types";
import PlaylistItem from "./PlaylistItem/PlaylistItem";

const SongsSlider = ({ playlist, currentSongId, setActiveSongId }) => {
  const id = playlist[currentSongId].id;

  const styles = {
    transform: `translateX(${80 - 80 * 1.5 * (id - 1)}px)`
  };

  return (
    <div className="songs-slider__container" style={styles}>
      {Object.keys(playlist).map(key => {
        return (
          <PlaylistItem
            key={playlist[key].id}
            item={playlist[key]}
            setActiveSongId={() => setActiveSongId(parseInt(key))}
            isActive={key == currentSongId}
          />
        );
      })}
    </div>
  );
};

SongsSlider.propTypes = {
  playlist: PropTypes.objectOf(
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
  currentSongId: PropTypes.number.isRequired,
  setActiveSongId: PropTypes.func.isRequired
};

export default SongsSlider;
