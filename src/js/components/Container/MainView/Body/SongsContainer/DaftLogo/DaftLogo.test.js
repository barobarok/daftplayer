import React from "react";
import { shallow } from "enzyme";

import DaftLogo from "./DaftLogo";
import DaftLogoIcon from "./DaftLogoIcon";
describe("DaftLogo Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(<DaftLogo />);
  });

  it("contain daft-logo__wrapper", () => {
    expect(mainWrapper.find(".daft-logo__wrapper")).toHaveLength(1);
  });
  it("contain daft-logo__container", () => {
    expect(mainWrapper.find(".daft-logo__container")).toHaveLength(1);
  });

  it("contain DaftLogoIcon", () => {
    expect(mainWrapper.find(DaftLogoIcon)).toHaveLength(1);
  });
});
