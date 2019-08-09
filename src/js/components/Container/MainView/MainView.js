import React from "react";
import MainViewHeader from "./MainViewHeader/MainViewHeader";
import Body from "./Body/Body";
const MainView = ({}) => {
  return (
    <div className="main-view__container">
      <MainViewHeader />
      <Body />
    </div>
  );
};

export default MainView;
