import React, { useContext } from "react";
import SVG from "react-inlinesvg";
import Icon from "./playlist_ico.svg";
import AppContext from "../../../../../AppContext";
const BottomMenu = ({}) => {
  const context = useContext(AppContext);
  const { nextSong } = context;

  return (
    <div className="bottomMenu__container">
      <div className="bottomMenu__icon">
        <SVG src={Icon} />
      </div>
      <div className="bottomMenu__info">
        <div className="bottomMenu__info--next">
          <p className="bottomMenu__info--next-label">NEXT</p>
          <p className="bottomMenu__info--next-title">{nextSong.title}</p>
          {/* ograniczenie ilosci znakow */}
        </div>
        <div className="bottomMenu__info--empty">........</div>
        <div className="bottomMenu__info--time">{nextSong.time}</div>
      </div>
    </div>
  );
};

export default BottomMenu;
