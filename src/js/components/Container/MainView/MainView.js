import React, { useContext } from "react";
import MainViewHeader from "./MainViewHeader/MainViewHeader";
import Body from "./Body/Body";
import AppContext from "../../../AppContext";
import SongBackground from "./SongBackground/SongBackground";
import Footer from "./Footer/Footer";
const MainView = ({}) => {
  const context = useContext(AppContext);
  const { playlist, currentSongId } = context;

  return (
    <div className="main-view__container">
      <SongBackground backgroundUrl={playlist[currentSongId].background} />
      <MainViewHeader albumName={playlist[currentSongId].album} />
      <Body />
      <Footer />
    </div>
  );
};

export default MainView;
