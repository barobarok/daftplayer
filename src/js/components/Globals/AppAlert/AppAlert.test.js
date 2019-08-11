import React from "react";
import { shallow } from "enzyme";

import AppAlert from "./AppAlert";

describe("AppAlert Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(<AppAlert text={"Test"} setAlert={() => {}} />);
  });

  it("contain app-alert__wrapper", () => {
    expect(mainWrapper.find(".app-alert__wrapper")).toHaveLength(1);
  });
  it("contain app-alert__container", () => {
    expect(mainWrapper.find(".app-alert__container")).toHaveLength(1);
  });

  it("containt btn app-alert__container-btn", () => {
    expect(mainWrapper.find("button.app-alert__container-btn")).toHaveLength(1);
  });

  it("check content", () => {
    expect(mainWrapper.find("p").text()).toBe("Test");
  });
});
