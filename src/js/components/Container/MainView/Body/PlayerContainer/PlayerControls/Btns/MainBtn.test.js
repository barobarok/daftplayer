import React from "react";
import { shallow } from "enzyme";

import MainBtn from "./MainBtn";

describe("MainBtn Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(<MainBtn isActive={false} func={() => {}} />);
  });

  it("contain player-main-btn__container", () => {
    expect(mainWrapper.find(".player-main-btn__container")).toHaveLength(1);
  });
  it("contain player-main-btn__clickarea", () => {
    expect(mainWrapper.find(".player-main-btn__clickarea")).toHaveLength(1);
  });

  it("is not active", () => {
    expect(mainWrapper.find("img.player-main-btn")).toHaveLength(1);
    expect(mainWrapper.find("img.player-main-btn--active")).toHaveLength(0);
  });

  it("is active", () => {
    const wrapper = shallow(<MainBtn isActive={true} func={() => {}} />);
    expect(wrapper.find("img.player-main-btn--active")).toHaveLength(1);
    expect(wrapper.find("img.player-main-btn")).toHaveLength(0);
  });
});
