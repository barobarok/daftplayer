import React, { useContext } from "react";
import AppContext from "../../../../AppContext";

const SideMenu = ({}) => {
  const context = useContext(AppContext);
  const { sideMenuShow } = context;
  return (
    <div
      className={
        sideMenuShow
          ? "side-menu__container side-menu__container-show"
          : "side-menu__container"
      }
    >
      T
    </div>
  );
};

export default SideMenu;
