import React from "react";
import { shallow } from "enzyme";

import PlayerContainer from "./PlayerContainer";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerTimeline from "./PlayerTimeline/PlayerTimeline";
import * as AppContext from "../../../../../AppContext";

describe("PlayerContainer Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    const contextValues = {
      playlist: {
        11: {
          id: 11,
          album: "Slowdive",
          title: "If You Love Me",
          band: "Joe Stone",
          time: 187,
          cover_img: "rd_bass_down.png",
          background: "rd_bass_down_bg.jpg"
        }
      },
      currentSongId: 11,
      timeParser: () => {},
      currenttime: 0
    };
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
    mainWrapper = shallow(<PlayerContainer />);
  });

  it("contain player__container", () => {
    expect(mainWrapper.find(".player__container")).toHaveLength(1);
  });
  it("contain PlayerControls and PlayerTimeline", () => {
    expect(mainWrapper.find(PlayerControls)).toHaveLength(1);
    expect(mainWrapper.find(PlayerTimeline)).toHaveLength(1);
  });
});
