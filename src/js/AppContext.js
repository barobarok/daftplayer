import React from "react";
const AppContext = React.createContext({
  playlist: [],
  currentSongId: "",
  nextSong: {}
});

export default AppContext;
