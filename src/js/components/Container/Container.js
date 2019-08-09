import React from "react";
import Menu from "./Menu/Menu";
import MainView from "./MainView/MainView";

const Container = () => {
  return (
    <div className="app__container">
      <Menu />
      <MainView />
    </div>
  );
};

export default Container;
