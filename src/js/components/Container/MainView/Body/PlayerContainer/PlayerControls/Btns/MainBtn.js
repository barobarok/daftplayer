import React, { useState } from "react";

const MainBtn = ({}) => {
  const [clicked, click] = useState(false);

  const handleClick = ev => {
    click(!clicked);
  };
  return (
    <div className="player-main-btn__container">
      <div className="player-main-btn__clickarea" onClick={handleClick} />
      {clicked ? (
        <img
          className="player-main-btn--active"
          src={`${require(`./Play_active.png`)}`}
        />
      ) : (
        <img
          className="player-main-btn"
          src={`${require(`./Play_inactive.png`)}`}
        />
      )}
    </div>
  );
};

export default MainBtn;
