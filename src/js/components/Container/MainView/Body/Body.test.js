import React from "react";
import { shallow } from "enzyme";
import Body from "./Body";
import SongsContainer from "./SongsContainer/SongsContainer";
import PlayerContainer from "./PlayerContainer/PlayerContainer";

describe("Body Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(<Body />);
  });

  it("contain .main-body__container", () => {
    expect(mainWrapper.find(".main-body__container")).toHaveLength(1);
  });

  it("contain SongsContainer and SongsContainer", () => {
    expect(mainWrapper.exists(SongsContainer)).toBeTruthy();
    expect(mainWrapper.exists(PlayerContainer)).toBeTruthy();
  });
});
