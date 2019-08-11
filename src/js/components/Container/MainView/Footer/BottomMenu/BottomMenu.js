import React, { useContext } from "react";
import DaftLogoIcon from "./PlayListIcon";
import AppContext from "../../../../../AppContext";
const BottomMenu = ({}) => {
  const context = useContext(AppContext);
  const { nextSongId, playlist, setBottomMenuShow, timeParser } = context;

  return (
    <div className="bottomMenu__container">
      <div className="bottomMenu__icon" onClick={() => setBottomMenuShow(true)}>
        <DaftLogoIcon />
      </div>
      <div className="bottomMenu__info">
        <div className="bottomMenu__info--next">
          <p className="bottomMenu__info--next-label">NEXT</p>
          <p className="bottomMenu__info--next-title">
            {playlist[nextSongId].title}
          </p>
          {/* ograniczenie ilosci znakow */}
        </div>

        <div className="bottomMenu__info--time">
          {timeParser(playlist[nextSongId].time)}
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
