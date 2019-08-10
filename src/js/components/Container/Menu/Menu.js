import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import Footer from "./Footer/Footer";

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
      <Footer shufflePlay={shufflePlay} setBottomMenuShow={setBottomMenuShow} />
    </div>
  );
};
export default Menu;
