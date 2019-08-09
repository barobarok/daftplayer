import React from "react";
import PropTypes from "prop-types";
const HeaderLabel = ({ title, text }) => {
  return (
    <div className="header-label__container">
      <p className="header-label__title">{title}</p>
      <p className="header-label__text">{text}</p>
    </div>
  );
};

HeaderLabel.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

HeaderLabel.defaultProps = {
  title: "ALBUM",
  text: "Loading..."
};

export default HeaderLabel;
