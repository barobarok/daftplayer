import React, { useContext } from "react";
import MainViewHeader from "./MainViewHeader/MainViewHeader";
import Body from "./Body/Body";
import AppContext from "../../../AppContext";
import SongBackground from "./SongBackground/SongBackground";

const MainView = ({}) => {
  const context = useContext(AppContext);
  const { playlist, activeSongIndex } = context;

  return (
    <div className="main-view__container">
      <SongBackground backgroundUrl={playlist[activeSongIndex].background} />
      <MainViewHeader albumName={playlist[activeSongIndex].album} />
      <Body />
    </div>
  );
};

export default MainView;
