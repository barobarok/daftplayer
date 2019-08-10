import React, { useContext } from "react";
import PlaylistItem from "./PlaylistItem/PlaylistItem";

import AppContext from "../../../../AppContext";
const Playlist = ({}) => {
  const context = useContext(AppContext);
  const { playlist, playSongFromMenu, timeParser, currentSongId } = context;
  return (
    <React.Fragment>
      <div className="playlist-menu__container">
        {Object.keys(playlist).map(key => {
          return (
            <PlaylistItem
              key={playlist[key].id}
              elem={playlist[key]}
              time={timeParser(playlist[key].time)}
              isActive={currentSongId == playlist[key].id}
              func={() => {
                playSongFromMenu(playlist[key].id);
              }}
            />
          );
        })}
      </div>
      <div className="playlist-menu__container-overlay" />
    </React.Fragment>
  );
};

export default Playlist;
