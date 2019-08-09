import React from "react";
import PropTypes from "prop-types";

const SongsContainer = ({}) => {
  return <div className="songs-container__container">T</div>;
};

SongsContainer.propTypes = {
  backFunc: PropTypes.func.isRequired
};

SongsContainer.defaultProps = {
  backFunc: () => console.log("add backFunc")
};
export default SongsContainer;
