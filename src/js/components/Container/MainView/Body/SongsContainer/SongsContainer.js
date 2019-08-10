import React, { useContext } from "react";

import AppContext from "../../../../../AppContext";
import SongsSlider from "./SongsSlider/SongsSlider";
import CurrentSongData from "./CurrentSongData/CurrentSongData";

const SongsContainer = ({}) => {
  const context = useContext(AppContext);
  const { playlist, currentSongId, setActiveSongId } = context;

  return (
    <div className="songs-container__container">
      {playlist[currentSongId] ? (
        <React.Fragment>
          <SongsSlider
            playlist={playlist}
            currentSongId={currentSongId}
            setActiveSongId={setActiveSongId}
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
