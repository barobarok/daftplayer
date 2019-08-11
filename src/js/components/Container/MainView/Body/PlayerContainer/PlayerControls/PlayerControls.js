import React from "react";
import MainBtn from "./Btns/MainBtn";
import SmallBtn from "./Btns/SmallBtn";
import SmallBtnWithState from "./Btns/SmallBtnWithState";
import ShuffleIcon from "./icons/ShuffleIcon";
import RepeatIcon from "./icons/RepeatIcon";
import NextIcon from "./icons/NextIcon";
import PrevIcon from "./icons/PrevIcon";
import { useAppContext } from "../../../../../../AppContext";
const PlayerControls = () => {
  const context = useAppContext();
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
        Icon={ShuffleIcon}
        func={() => {
          setOption("shuffle", !options.shuffle);
        }}
        active={options.shuffle}
      />
      <SmallBtn Icon={PrevIcon} func={setPrevSong} />
      <MainBtn isActive={play} func={() => controlPlaySong(!play)} />
      <SmallBtn Icon={NextIcon} func={setNextSongActive} />
      <SmallBtnWithState
        Icon={RepeatIcon}
        func={() => {
          setOption("reapeatCurrent", !options.reapeatCurrent);
        }}
        active={options.reapeatCurrent}
      />
    </div>
  );
};

export default PlayerControls;
