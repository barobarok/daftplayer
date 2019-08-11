import React from "react";
import { shallow } from "enzyme";
import SongsContainer from "./SongsContainer";
import * as AppContext from "../../../../../AppContext";
import SongsSlider from "./SongsSlider/SongsSlider";
import CurrentSongData from "./CurrentSongData/CurrentSongData";
import DaftLogo from "./DaftLogo/DaftLogo";

describe("SongsContainer Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(<SongsContainer />);
  });

  it("contain .songs-container__container", () => {
    expect(mainWrapper.find(".songs-container__container")).toHaveLength(1);
  });

  it("not contain playlist context", () => {
    expect(mainWrapper.find(".songs-container__container div").text()).toBe(
      "STOP"
    );
  });

  it("contain playlsit context - display SongsSlider, CurrentSongData, DaftLogo", () => {
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
      setActiveSongId: () => {},
      sideMenuShow: false
    };
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<SongsContainer />);
    expect(wrapper.exists(SongsSlider)).toBeTruthy();
    expect(wrapper.exists(CurrentSongData)).toBeTruthy();
    expect(wrapper.exists(DaftLogo)).toBeTruthy();
  });
});
