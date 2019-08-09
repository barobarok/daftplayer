import React from "react";
import Header from "../../../Globals/_Header/HeaderContainer/HeaderContainer";
import HeaderLabel from "../../../Globals/_Header/HeaderLabel/HeaderLabel";
import MenuBtn from "../../../Globals/_Header/MenuBtn/MenuBtn";
const MainViewHeader = () => {
  return (
    <Header>
      <HeaderLabel title={"ALBUM"} text={"Unreleased"} />
      <MenuBtn />
    </Header>
  );
};

export default MainViewHeader;