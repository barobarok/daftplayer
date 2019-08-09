import React, { useState } from "react";
import SVG from "react-inlinesvg";
const SmallBtn = ({ icon, func }) => {
  const [clicked, click] = useState(false);

  return (
    <div
      className={clicked ? `player__icon player__icon--active` : `player__icon`}
      onClick={() => click(!clicked)}
    >
      <SVG src={icon} />
    </div>
  );
};

export default SmallBtn;
