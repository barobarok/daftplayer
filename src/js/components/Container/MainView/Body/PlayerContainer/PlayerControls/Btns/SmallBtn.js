import React from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
const SmallBtn = ({ icon, func }) => {
  return (
    <div className={`player__icon`} onClick={func}>
      <SVG src={icon} />
    </div>
  );
};
SmallBtn.propTypes = {
  icon: PropTypes.node.isRequired,
  func: PropTypes.func.isRequired
};
export default SmallBtn;
