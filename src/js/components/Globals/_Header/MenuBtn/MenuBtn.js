import React from "react";
import SVG from "react-inlinesvg";
import Icon from "./more_ico.svg";
import PropTypes from "prop-types";
const MenuBtn = ({ func, isActive }) => {
  return (
    <div
      className={
        isActive
          ? "header-btn__container menu-btn__container menu-btn__container-active  "
          : "header-btn__container menu-btn__container "
      }
      onClick={func}
    >
      <SVG
        src={Icon}
        preProcessor={code => code.replace(/fill=".*?"/g, `fill="0fd65a"`)}
      />
    </div>
  );
};

MenuBtn.propTypes = {
  func: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

MenuBtn.defaultProps = {
  func: () => console.log("add menuFunc")
};

export default MenuBtn;
