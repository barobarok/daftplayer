import React from "react";
import MenuBtnIcon from "./MenuBtnIcon";
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
      <MenuBtnIcon />
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
