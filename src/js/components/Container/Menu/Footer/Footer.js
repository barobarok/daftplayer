import React from "react";
import PropsTypes from "prop-types";
import HideMenuBtn from "../Btns/HideMenuBtn";
import ShuffleBtn from "../Btns/ShuffleBtn";

const Footer = ({ setBottomMenuShow, shufflePlay }) => {
  return (
    <div className="playlist-menu__footer">
      <ShuffleBtn func={shufflePlay} />
      <HideMenuBtn func={() => setBottomMenuShow(false)} />
    </div>
  );
};
Footer.propsTypes = {
  setBottomMenuShow: PropsTypes.func.isRequired,
  shufflePlay: PropsTypes.func.isRequired
};
export default Footer;
