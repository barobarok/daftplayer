import React from "react";
import { shallow } from "enzyme";

import SmallBtn from "./SmallBtn";
import NextIcon from "../icons/NextIcon";
describe("SmallBtn Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(<SmallBtn Icon={NextIcon} func={() => {}} />);
  });

  it("contain player__icon", () => {
    expect(mainWrapper.find(".player__icon")).toHaveLength(1);
  });
  it("contain icon", () => {
    expect(mainWrapper.find(NextIcon)).toHaveLength(1);
  });
});
