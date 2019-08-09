import React from "react";
import SVG from "react-inlinesvg";
import Icon from "./more_ico.svg";
import PropTypes from "prop-types";
const MenuBtn = ({ menuFunc, color }) => {
  return (
    <div
      className="header-btn__container menu-btn__container"
      onClick={menuFunc}
    >
      <SVG
        src={Icon}
        preProcessor={code => code.replace(/fill=".*?"/g, `fill="${color}"`)}
      />
    </div>
  );
};

MenuBtn.propTypes = {
  menuFunc: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

MenuBtn.defaultProps = {
  menuFunc: () => console.log("add menuFunc"),
  color: "0fd65a"
};

export default MenuBtn;
