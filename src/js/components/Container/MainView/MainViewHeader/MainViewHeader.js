import React, { useContext } from "react";
import Header from "../../../Globals/_Header/HeaderContainer/HeaderContainer";
import HeaderLabel from "../../../Globals/_Header/HeaderLabel/HeaderLabel";
import MenuBtn from "../../../Globals/_Header/MenuBtn/MenuBtn";
import AppContext from "../../../../AppContext";
import SongLabel from "./SongLabel/SongLabel";
import Playbtn from "./Playbtn/Playbtn";
const MainViewHeader = ({ albumName }) => {
  const context = useContext(AppContext);
  const {
    bottomMenuShow,
    play,
    playlist,
    currentSongId,
    controlPlaySong,
    sideMenuShow,
    setSideMenuShow,
    setBottomMenuShow
  } = context;
  const currentSong = playlist[currentSongId];

  return (
    <Header
      backFunc={() => {
        setSideMenuShow(false);
        setBottomMenuShow(false);
      }}
    >
      <span
        className={
          bottomMenuShow
            ? "main-header__span main-header__span-show "
            : "main-header__span"
        }
      >
        <SongLabel title={currentSong.title} band={currentSong.band} />
        <Playbtn play={play} controlPlaySong={() => controlPlaySong(!play)} />
      </span>

      <span
        className={
          bottomMenuShow
            ? "main-header__span"
            : "main-header__span main-header__span-show "
        }
      >
        <HeaderLabel title={"ALBUM"} text={albumName} />
        <MenuBtn
          func={() => setSideMenuShow(!sideMenuShow)}
          isActive={sideMenuShow}
        />
      </span>
    </Header>
  );
};

export default MainViewHeader;
