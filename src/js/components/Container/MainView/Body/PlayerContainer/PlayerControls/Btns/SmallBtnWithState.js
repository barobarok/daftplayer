import React from "react";
import PropTypes from "prop-types";
const SmallBtnWithState = ({ Icon, func, active }) => {
  return (
    <div
      className={active ? `player__icon player__icon--active` : `player__icon`}
      onClick={func}
    >
      <Icon />
    </div>
  );
};
SmallBtnWithState.propTypes = {
  Icon: PropTypes.func.isRequired,
  func: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
export default SmallBtnWithState;
