import React from "react";
const AppContext = React.createContext({
  playlist: [],
  currentSongId: "",
  nextSongId: {},
  options: {},
  setOption: () => {},
  setNextSongActive: () => {},
  setPrevSong: () => {}
});

export default AppContext;
