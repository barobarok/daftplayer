import React from "react";

import { useAppContext } from "../../../../../AppContext";
import SongsSlider from "./SongsSlider/SongsSlider";
import CurrentSongData from "./CurrentSongData/CurrentSongData";
import DaftLogo from "./DaftLogo/DaftLogo";

const SongsContainer = ({}) => {
  const context = useAppContext();
  const { playlist, currentSongId, setActiveSongId, sideMenuShow } = context;

  return (
    <div className="songs-container__container">
      {playlist[currentSongId] ? (
        <React.Fragment>
          <DaftLogo />
          <SongsSlider
            playlist={playlist}
            currentSongId={currentSongId}
            setActiveSongId={setActiveSongId}
            sideMenuShow={sideMenuShow}
          />
          <CurrentSongData
            title={playlist[currentSongId].title}
            band={playlist[currentSongId].band}
          />
        </React.Fragment>
      ) : (
        <div>STOP</div>
      )}
    </div>
  );
};

export default SongsContainer;
