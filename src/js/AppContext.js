import React, { useContext } from "react";
const AppContext = React.createContext({
  playlist: {},
  currentSongId: 0,
  setActiveSongId: () => {},
  nextSongId: 0,
  options: {},
  setOption: () => {},
  setNextSongActive: () => {},
  setPrevSong: () => {},
  bottomMenuShow: false,
  setBottomMenuShow: () => {},
  shufflePlay: () => {},
  playSongFromMenu: () => {},
  timeParser: () => {},
  currenttime: 0,
  play: false,
  controlPlaySong: () => {},
  sideMenuShow: false,
  setSideMenuShow: () => {}
});
export const useAppContext = () => useContext(AppContext);
export default AppContext;
