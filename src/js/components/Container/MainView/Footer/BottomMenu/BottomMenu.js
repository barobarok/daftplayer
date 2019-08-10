import React from "react";
import SVG from "react-inlinesvg";
import Icon from "./playlist_ico.svg";
const BottomMenu = ({}) => {
  return (
    <div className="bottomMenu__container">
      <div className="bottomMenu__icon">
        <SVG src={Icon} />
      </div>
      <div className="bottomMenu__info">
        <div className="bottomMenu__info--next">
          <p className="bottomMenu__info--next-label">NEXT</p>
          <p className="bottomMenu__info--next-title">Bobowa piosenka</p>
          {/* ograniczenie ilosci znakow */}
        </div>
        <div className="bottomMenu__info--empty">........</div>
        <div className="bottomMenu__info--time">2:23</div>
      </div>
    </div>
  );
};

export default BottomMenu;
