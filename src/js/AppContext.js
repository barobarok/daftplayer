import React from "react";
const AppContext = React.createContext({
  playlist: [],
  currentSongId: "",
  nextSong: {},
  options: {},
  setOption: () => {}
});

export default AppContext;
