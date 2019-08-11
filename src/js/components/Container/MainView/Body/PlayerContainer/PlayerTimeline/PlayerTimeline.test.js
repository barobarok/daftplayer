import React from "react";
import { shallow } from "enzyme";

import PlayerTimeline from "./PlayerTimeline";

describe("PlayerTimeline Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(
      <PlayerTimeline
        currentTime={"2:02"}
        fullTime={"4:04"}
        timelineProgres={"50"}
      />
    );
  });

  it("contain player-timeline__container", () => {
    expect(mainWrapper.find(".player-timeline__container")).toHaveLength(1);
  });
  it("player-timeline__timeline", () => {
    expect(mainWrapper.find(".player-timeline__timeline")).toHaveLength(1);
  });
  it("contain player-timeline__live-timeline", () => {
    expect(mainWrapper.find(".player-timeline__live-timeline")).toHaveLength(1);
  });

  it("contain player-timeline__container--current-time", () => {
    expect(
      mainWrapper.find(".player-timeline__container--current-time")
    ).toHaveLength(1);
    expect(
      mainWrapper.find(".player-timeline__container--current-time").text()
    ).toBe("2:02");
  });

  it("contain player-timeline__container--full-time", () => {
    expect(
      mainWrapper.find(".player-timeline__container--full-time")
    ).toHaveLength(1);
    expect(
      mainWrapper.find(".player-timeline__container--full-time").text()
    ).toBe("4:04");
  });
});
