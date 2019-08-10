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
    controlPlaySong
  } = context;
  const currentSong = playlist[currentSongId];
  console.log(bottomMenuShow);
  return (
    <Header>
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
        <MenuBtn />
      </span>
    </Header>
  );
};

export default MainViewHeader;
