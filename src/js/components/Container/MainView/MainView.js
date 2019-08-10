import React, { useContext } from "react";
import MainViewHeader from "./MainViewHeader/MainViewHeader";
import Body from "./Body/Body";
import AppContext from "../../../AppContext";

import Footer from "./Footer/Footer";
const MainView = ({}) => {
  const context = useContext(AppContext);
  const { playlist, currentSongId } = context;

  return (
    <div className="main-view__container ">
      <MainViewHeader albumName={playlist[currentSongId].album} />

      <React.Fragment>
        <Body />
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default MainView;
