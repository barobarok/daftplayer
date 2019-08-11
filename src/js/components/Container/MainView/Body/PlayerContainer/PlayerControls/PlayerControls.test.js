import React from "react";
import { shallow } from "enzyme";

import PlayerControls from "./PlayerControls";
import * as AppContext from "../../../../../../AppContext";
import MainBtn from "./Btns/MainBtn";
import SmallBtn from "./Btns/SmallBtn";
import SmallBtnWithState from "./Btns/SmallBtnWithState";

describe("PlayerControls Component", () => {
  let mainWrapper = {};

  it("renders without crashing", () => {
    const contextValues = {
      options: {
        shuffle: false,
        reapeatCurrent: false
      },
      setOption: () => {},

      setNextSongActive: () => {},
      setPrevSong: () => {},
      controlPlaySong: () => {},
      play: false
    };
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
    mainWrapper = shallow(<PlayerControls />);
  });

  it("contain player-controls__container", () => {
    expect(mainWrapper.find(".player-controls__container")).toHaveLength(1);
  });
  it("contain MainBtn", () => {
    expect(mainWrapper.find(MainBtn)).toHaveLength(1);
  });
  it("contain SmallBtns", () => {
    expect(mainWrapper.find(SmallBtn)).toHaveLength(2);
  });
  it("contain SmallBtsnWithState", () => {
    expect(mainWrapper.find(SmallBtnWithState)).toHaveLength(2);
  });
});
