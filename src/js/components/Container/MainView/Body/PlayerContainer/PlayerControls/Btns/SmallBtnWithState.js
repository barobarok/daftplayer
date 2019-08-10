import React from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
const SmallBtnWithState = ({ icon, func, active }) => {
  return (
    <div
      className={active ? `player__icon player__icon--active` : `player__icon`}
      onClick={func}
    >
      <SVG src={icon} />
    </div>
  );
};
SmallBtnWithState.propTypes = {
  icon: PropTypes.node.isRequired,
  func: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
export default SmallBtnWithState;
