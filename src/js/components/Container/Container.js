import React, { useContext } from "react";
import Menu from "./Menu/Menu";
import MainView from "./MainView/MainView";
import SongBackground from "./MainView/SongBackground/SongBackground";

import AppContext from "../../AppContext";
const Container = () => {
  const context = useContext(AppContext);
  const { playlist, currentSongId } = context;
  return (
    <div className="app__container">
      <MainView />
      <Menu />
      <SongBackground backgroundUrl={playlist[currentSongId].background} />
    </div>
  );
};

export default Container;
