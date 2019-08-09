import React from "react";
import SVG from "react-inlinesvg";
import Icon from "./back_ico.svg";
import PropTypes from "prop-types";
const BackBtn = ({ backFunc }) => {
  return (
    <div
      className=" header-btn__container back-btn__container"
      onClick={backFunc}
    >
      <SVG src={Icon} />
    </div>
  );
};
BackBtn.propTypes = {
  backFunc: PropTypes.func.isRequired
};

BackBtn.defaultProps = {
  backFunc: () => console.log("add backFunc")
};

export default BackBtn;
