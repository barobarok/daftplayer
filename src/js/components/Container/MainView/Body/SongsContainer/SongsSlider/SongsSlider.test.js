import React from "react";
import { shallow } from "enzyme";

import SongsSlider from "./SongsSlider";
import PlaylistItem from "./PlaylistItem/PlaylistItem";

describe("SongsSlider Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(
      <SongsSlider
        playlist={{
          11: {
            id: 11,
            album: "Slowdive",
            title: "If You Love Me",
            band: "Joe Stone",
            time: 187,
            cover_img: "rd_bass_down.png",
            background: "rd_bass_down_bg.jpg"
          }
        }}
        currentSongId={11}
        setActiveSongId={() => {}}
        sideMenuShow={false}
      />
    );
  });

  it("contain .songs-slider__container", () => {
    expect(mainWrapper.find(".songs-slider__container")).toHaveLength(1);
  });

  it("contain playlist - display PlaylistItem", () => {
    expect(mainWrapper.find(PlaylistItem)).toHaveLength(1);
  });
});
