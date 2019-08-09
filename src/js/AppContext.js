import React from "react";
const AppContext = React.createContext({
  playlist: [],
  activeSongIndex: null
});

export default AppContext;
