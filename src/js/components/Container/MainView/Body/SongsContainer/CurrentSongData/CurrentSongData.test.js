import React from "react";
import { shallow } from "enzyme";

import CurrentSongData from "./CurrentSongData";

describe("CurrentSongData Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(
      <CurrentSongData title={"Superowo"} band={"Bobowy"} />
    );
  });

  it("contain current-song__container", () => {
    expect(mainWrapper.find(".current-song__container")).toHaveLength(1);
  });
  it("contain current-song__title", () => {
    expect(mainWrapper.find(".current-song__title")).toHaveLength(1);
  });
  it("contain current-song__band", () => {
    expect(mainWrapper.find(".current-song__band")).toHaveLength(1);
  });
  it("check title prop", () => {
    expect(mainWrapper.find(".current-song__title").text()).toBe("Superowo");
  });
  it("check band prop", () => {
    expect(mainWrapper.find(".current-song__band").text()).toBe("Bobowy");
  });
});
