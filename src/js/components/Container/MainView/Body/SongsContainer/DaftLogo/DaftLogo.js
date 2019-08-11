import React from "react";
import SVG from "react-inlinesvg";
import Logo from "./daft_logo.svg";
const DaftLogo = ({}) => {
  return (
    <div className="daft-logo__wrapper">
      <div className="daft-logo__container">
        <SVG src={Logo} />
      </div>
    </div>
  );
};

export default DaftLogo;
