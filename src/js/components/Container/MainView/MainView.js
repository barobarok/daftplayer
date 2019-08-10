import React, { useContext } from "react";
import MainViewHeader from "./MainViewHeader/MainViewHeader";
import Body from "./Body/Body";
import AppContext from "../../../AppContext";
import SongBackground from "./SongBackground/SongBackground";
import Footer from "./Footer/Footer";
const MainView = ({}) => {
  const context = useContext(AppContext);
  const { playlist, activeSongIndex } = context;

  return (
    <div className="main-view__container">
      <SongBackground backgroundUrl={playlist[activeSongIndex].background} />
      <MainViewHeader albumName={playlist[activeSongIndex].album} />
      <Body />
      <Footer playlist={playlist} activeSongIndex={activeSongIndex} />
    </div>
  );
};

export default MainView;
