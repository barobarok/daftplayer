import React from "react";
import PropTypes from "prop-types";
const AppAlert = ({ text, setAlert }) => {
  return (
    <div className="app-alert__wrapper">
      <div className="app-alert__container">
        <p>{text}</p>
        <button
          className="app-alert__container-btn"
          onClick={() => setAlert({ text: "", clear: false })}
        >
          Close
        </button>
      </div>
    </div>
  );
};

AppAlert.propTypes = {
  text: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default AppAlert;
