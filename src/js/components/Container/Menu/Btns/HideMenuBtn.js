import React from "react";
import SVG from "react-inlinesvg";
import Icon from "./hide_ico.svg";
import PropsTypes from "prop-types";
const HideMenuBtn = ({ func }) => {
  return (
    <div className="playlist-menu__hide-btn">
      <SVG src={Icon} onClick={func} />
    </div>
  );
};
HideMenuBtn.propsTypes = {
  func: PropsTypes.func.isRequired
};
export default HideMenuBtn;
