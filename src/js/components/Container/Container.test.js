import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

import Menu from "./Menu/Menu";
import MainView from "./MainView/MainView";
import SongBackground from "./MainView/SongBackground/SongBackground";
import * as AppContext from "../../AppContext";

describe("Container Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(<Container />);
  });

  it("contain .app__container", () => {
    expect(mainWrapper.find(".app__container")).toHaveLength(1);
  });

  it("contain MainView, Menu and non SongBackground", () => {
    expect(mainWrapper.exists(Menu)).toBeTruthy();
    expect(mainWrapper.exists(MainView)).toBeTruthy();
    expect(mainWrapper.exists(SongBackground)).toBeFalsy();
  });

  it("contain SongBackground", () => {
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
      currentSongId: 11
    };
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Container />);

    expect(wrapper.exists(SongBackground)).toBeTruthy();
  });
});
