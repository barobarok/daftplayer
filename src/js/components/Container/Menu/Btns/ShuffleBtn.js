import React from "react";
import PropsTypes from "prop-types";
const ShuffleBtn = ({ func }) => {
  return (
    <div className="playlist-menu__shuffle-btn">
      <button onClick={func}>SHUFFLE PLAY</button>
    </div>
  );
};
ShuffleBtn.propsTypes = {
  func: PropsTypes.func.isRequired
};
export default ShuffleBtn;
