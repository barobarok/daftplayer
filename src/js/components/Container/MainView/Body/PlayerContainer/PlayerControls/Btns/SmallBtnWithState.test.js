import React from "react";
import { shallow } from "enzyme";

import SmallBtnWithState from "./SmallBtnWithState";
import PrevIcon from "../icons/PrevIcon";
describe("SmallBtnWithState Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(
      <SmallBtnWithState Icon={PrevIcon} func={() => {}} active={false} />
    );
  });

  it("is not active", () => {
    expect(mainWrapper.find(".player__icon")).toHaveLength(1);
    expect(mainWrapper.find(".player__icon--active")).toHaveLength(0);
  });
  it("contain icon", () => {
    expect(mainWrapper.find(PrevIcon)).toHaveLength(1);
  });
  it("is active", () => {
    const wrapper = shallow(
      <SmallBtnWithState Icon={PrevIcon} func={() => {}} active={true} />
    );
    expect(wrapper.find(".player__icon")).toHaveLength(1);
    expect(wrapper.find(".player__icon--active")).toHaveLength(1);
  });
});
