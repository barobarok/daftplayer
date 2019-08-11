import React from "react";
import BackBtnIcon from "./BackBtnIcon";
import PropTypes from "prop-types";
const BackBtn = ({ backFunc }) => {
  return (
    <div
      className=" header-btn__container back-btn__container"
      onClick={backFunc}
    >
      <BackBtnIcon />
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
