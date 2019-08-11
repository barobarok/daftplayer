import React from "react";
import { shallow } from "enzyme";

import PlaylistItem from "./PlaylistItem";

describe("PlaylistItem Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    mainWrapper = shallow(
      <PlaylistItem
        item={{
          id: 11,
          album: "Slowdive",
          title: "If You Love Me",
          band: "Joe Stone",
          time: 187,
          cover_img: "rd_bass_down.png",
          background: "rd_bass_down_bg.jpg"
        }}
        isActive={false}
        isActiveSideMenu={false}
        setActiveSongId={() => {}}
      />
    );
  });

  it("contain styles if sideMenu is off and cover is off -  isActive = false && isActiveSideMenu = false", () => {
    expect(mainWrapper.find(".playlist-item__container")).toHaveLength(1);
    expect(mainWrapper.find(".playlist-item__container-active")).toHaveLength(
      0
    );
    expect(
      mainWrapper.find(".playlist-item__container-active-if-side-menu")
    ).toHaveLength(0);
    expect(
      mainWrapper.find(".playlist-item__container-active-if-none-side-menu")
    ).toHaveLength(0);
  });

  it("contain styles if sideMenu is off and cover is active- isActive = true && isActiveSideMenu = false", () => {
    const wrapper = shallow(
      <PlaylistItem
        item={{
          id: 11,
          album: "Slowdive",
          title: "If You Love Me",
          band: "Joe Stone",
          time: 187,
          cover_img: "rd_bass_down.png",
          background: "rd_bass_down_bg.jpg"
        }}
        isActive={true}
        isActiveSideMenu={false}
        setActiveSongId={() => {}}
      />
    );

    expect(wrapper.find(".playlist-item__container")).toHaveLength(1);
    expect(wrapper.find(".playlist-item__container-active")).toHaveLength(1);
    expect(
      wrapper.find(".playlist-item__container-active-if-side-menu")
    ).toHaveLength(0);
    expect(
      wrapper.find(".playlist-item__container-active-if-none-side-menu")
    ).toHaveLength(1);
  });

  it("contain styles if sideMenu is active and cover is active - isActive = true && isActiveSideMenu = true", () => {
    const wrapper = shallow(
      <PlaylistItem
        item={{
          id: 11,
          album: "Slowdive",
          title: "If You Love Me",
          band: "Joe Stone",
          time: 187,
          cover_img: "rd_bass_down.png",
          background: "rd_bass_down_bg.jpg"
        }}
        isActive={true}
        isActiveSideMenu={true}
        setActiveSongId={() => {}}
      />
    );

    expect(wrapper.find(".playlist-item__container")).toHaveLength(1);
    expect(wrapper.find(".playlist-item__container-active")).toHaveLength(1);
    expect(
      wrapper.find(".playlist-item__container-active-if-side-menu")
    ).toHaveLength(1);
    expect(
      wrapper.find(".playlist-item__container-active-if-none-side-menu")
    ).toHaveLength(0);
  });

  it("contain img", () => {
    expect(mainWrapper.find("img")).toHaveLength(1);
  });
});
