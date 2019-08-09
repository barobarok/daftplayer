import React from "react";
import BackBtn from "../BackBtn/BackBtn";
import PropTypes from "prop-types";
const HeaderContainer = ({ backFunc, children }) => {
  return (
    <div className="header__container">
      <BackBtn backFunc={backFunc} />
      {children}
    </div>
  );
};

HeaderContainer.propTypes = {
  backFunc: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  )
};

HeaderContainer.defaultProps = {
  backFunc: () => console.log("add backFunc")
};

export default HeaderContainer;
