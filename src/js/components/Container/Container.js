import React from "react";
import Menu from "./Menu/Menu";
import MainView from "./MainView/MainView";
import SongBackground from "./MainView/SongBackground/SongBackground";

import { useAppContext } from "../../AppContext";
const Container = () => {
  const context = useAppContext();
  const { playlist, currentSongId } = context;

  return (
    <div className="app__container">
      <MainView />
      <Menu />
      {playlist[currentSongId] && (
        <SongBackground backgroundUrl={playlist[currentSongId].background} />
      )}
    </div>
  );
};

export default Container;
