import React from "react";
import PropTypes from "prop-types";
const PlaylistItem = ({
  item,
  setActiveSongId,
  isActive,
  isActiveSideMenu
}) => {
  return (
    <React.Fragment>
      <div
        className={
          isActive
            ? `playlist-item__container playlist-item__container-active ${
                isActiveSideMenu
                  ? "playlist-item__container-active-if-side-menu"
                  : "playlist-item__container-active-if-none-side-menu "
              }`
            : `playlist-item__container`
        }
        onClick={setActiveSongId}
      >
        <img
          src={require(`../../../../../../../../imgs/covers/${item.cover_img}`)}
        />
      </div>
    </React.Fragment>
  );
};
PlaylistItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    album: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    band: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    cover_img: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
  }),
  isActive: PropTypes.bool.isRequired,
  setActiveSongId: PropTypes.func.isRequired,
  isActiveSideMenu: PropTypes.bool.isRequired
};
export default PlaylistItem;
