import React from "react";
import Icon from "./Icon";
import PropsTypes from "prop-types";
const HideMenuBtn = ({ func }) => {
  return (
    <div className="playlist-menu__hide-btn">
      <Icon onClick={func} />
    </div>
  );
};
HideMenuBtn.propsTypes = {
  func: PropsTypes.func.isRequired
};
export default HideMenuBtn;
