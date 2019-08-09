import React from "react";
import MainBtn from "./Btns/MainBtn";
import SmallBtn from "./Btns/SmallBtn";
import shuffle from "./icons/shuffle_ico.svg";
import prev from "./icons/previous_ico.svg";
import next from "./icons/next_ico.svg";
import repeat from "./icons/repeat_ico.svg";
const PlayerControls = () => {
  return (
    <div className="player-controls__container">
      <SmallBtn icon={shuffle} />
      <SmallBtn icon={prev} />
      <MainBtn />
      <SmallBtn icon={next} />
      <SmallBtn icon={repeat} />
    </div>
  );
};

export default PlayerControls;
