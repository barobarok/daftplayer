import React, { useContext } from "react";
import MainBtn from "./Btns/MainBtn";
import SmallBtn from "./Btns/SmallBtn";
import SmallBtnWithState from "./Btns/SmallBtnWithState";
import shuffle from "./icons/shuffle_ico.svg";
import prev from "./icons/previous_ico.svg";
import next from "./icons/next_ico.svg";
import repeat from "./icons/repeat_ico.svg";
import AppContext from "../../../../../../AppContext";
const PlayerControls = () => {
  const context = useContext(AppContext);
  const {
    options,
    setOption,
    setNextSongActive,
    setPrevSong,
    controlPlaySong,
    play
  } = context;

  return (
    <div className="player-controls__container">
      <SmallBtnWithState
        icon={shuffle}
        func={() => {
          setOption("shuffle", !options.shuffle);
        }}
        active={options.shuffle}
      />
      <SmallBtn icon={prev} func={setPrevSong} />
      <MainBtn isActive={play} func={() => controlPlaySong(!play)} />
      <SmallBtn icon={next} func={setNextSongActive} />
      <SmallBtnWithState
        icon={repeat}
        func={() => {
          setOption("reapeatCurrent", !options.reapeatCurrent);
        }}
        active={options.reapeatCurrent}
      />
    </div>
  );
};

export default PlayerControls;
