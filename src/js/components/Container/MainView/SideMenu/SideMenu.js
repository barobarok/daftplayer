import React, { useContext } from "react";
import AppContext from "../../../../AppContext";

const SideMenu = ({}) => {
  const context = useContext(AppContext);
  const { sideMenuShow, playlist, currentSongId } = context;
  const song = playlist[currentSongId];
  return (
    <div
      className={
        sideMenuShow
          ? "side-menu__container side-menu__container-show"
          : "side-menu__container"
      }
    >
      <div className="side-menu-body__container">
        <div className="side-menu-body__img">
          <img src={require(`../../../../../imgs/covers/${song.cover_img}`)} />
        </div>
        <div className="side-menu-body__label">
          <div className="label__label-title">{song.title}</div>
          <div className="label__label-band">{song.band}</div>
          <div className="label__label-footer">...</div>
        </div>
        <div className="side-menu-body__inside-nav">
          <div className="inside-nav__item"> Add to playlist</div>
          <div className="inside-nav__item"> Show album</div>
          <div className="inside-nav__item"> Share with friends</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
