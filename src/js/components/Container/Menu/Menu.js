import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import Footer from "./Footer/Footer";
import Playlist from "./Playlist/Playlist";

const Menu = ({}) => {
  const context = useContext(AppContext);
  const { bottomMenuShow, setBottomMenuShow, shufflePlay } = context;
  return (
    <div
      className={
        bottomMenuShow
          ? "menu__container menu__container-show"
          : "menu__container"
      }
    >
      <Playlist />
      <Footer shufflePlay={shufflePlay} setBottomMenuShow={setBottomMenuShow} />
    </div>
  );
};
export default Menu;
