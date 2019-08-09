import React, { useContext } from "react";

import AppContext from "../../../../../AppContext";
import SongsSlider from "./SongsSlider/SongsSlider";
import CurrentSongData from "./CurrentSongData/CurrentSongData";

const SongsContainer = ({}) => {
  const context = useContext(AppContext);
  const { playlist, activeSongIndex, setActiveSongIndex } = context;

  return (
    <div className="songs-container__container">
      {playlist.length ? (
        <React.Fragment>
          <SongsSlider
            playlist={playlist}
            activeSongIndex={activeSongIndex}
            setActiveSongIndex={setActiveSongIndex}
          />
          <CurrentSongData
            title={playlist[activeSongIndex].title}
            band={playlist[activeSongIndex].band}
          />
        </React.Fragment>
      ) : (
        <div>STOP</div>
      )}
    </div>
  );
};

export default SongsContainer;
