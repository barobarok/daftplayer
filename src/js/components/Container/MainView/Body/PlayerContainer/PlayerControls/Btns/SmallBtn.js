import React from "react";

import PropTypes from "prop-types";
const SmallBtn = ({ func, Icon }) => {
  return (
    <div className={`player__icon`} onClick={func}>
      <Icon />
    </div>
  );
};
SmallBtn.propTypes = {
  Icon: PropTypes.func.isRequired,
  func: PropTypes.func.isRequired
};
export default SmallBtn;
