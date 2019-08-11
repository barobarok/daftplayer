import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Container from "./components/Container/Container";
import data from "./data.json";
describe("App Component", () => {
  let mainWrapper = {};
  it("renders without crashing", () => {
    mainWrapper = shallow(<App />);
  });

  it("contain widnow__container", () => {
    expect(mainWrapper.find(".widnow__container")).toHaveLength(1);
  });

  it("contain Container", () => {
    expect(mainWrapper.state().loadedCode).toBe(200);

    expect(mainWrapper.find(Container)).toHaveLength(1);
  });

  it("contain Container after set wrong code", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loadedCode: 404 });
    expect(wrapper.state().loadedCode).toBe(404);
    expect(wrapper.find(Container)).toHaveLength(0);
  });

  it("check method - setSideMenuShow", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setSideMenuShow(false);
    expect(wrapper.state().sideMenuShow).toBe(false);
    expect(wrapper.state().sideMenuShow).not.toBe(true);
    wrapper.instance().setSideMenuShow(true);
    expect(wrapper.state().sideMenuShow).toBe(true);
    expect(wrapper.state().sideMenuShow).not.toBe(false);
  });

  it("check method - timeParser", () => {
    const wrapper = shallow(<App />);
    const result = wrapper.instance().timeParser(1204);
    expect(result).toBe("20:04");
    expect(result).not.toBe("20:4");
    expect(result).not.toBe(1204);
    expect(wrapper.state().alertMsg).toBe("");
    const stringInput = wrapper.instance().timeParser("1204");
    expect(stringInput).toBe("00:00");
    expect(wrapper.state().loadedCode).toBe(500);
    expect(wrapper.state().alertMsg).toBe("Uszkodzona playlista");
  });

  it("check method - shufflePlay", () => {
    mainWrapper.instance().shufflePlay();
    const state = mainWrapper.state();
    const { shuffle } = state.options;

    expect(shuffle).toBeTruthy();
    expect(state.bottomMenuShow).toBeFalsy();
  });

  it("check method - setBottomMenuShow", () => {
    mainWrapper.instance().setBottomMenuShow(true);
    expect(mainWrapper.state().bottomMenuShow).toBeTruthy();
    mainWrapper.instance().setBottomMenuShow(false);
    expect(mainWrapper.state().bottomMenuShow).toBeFalsy();
  });

  it("check method - setAlertMsg not clear", () => {
    mainWrapper.instance().setAlertMsg({ text: "test", clear: false });
    expect(mainWrapper.state().alertMsg).toBe("test");
    setTimeout(() => {
      expect(mainWrapper.state().alertMsg).toBe("test");
    }, 2000);
  });

  it("check method - setAlertMsg clear", () => {
    mainWrapper.instance().setAlertMsg({ text: "test2", clear: true });
    expect(mainWrapper.state().alertMsg).toBe("test2");
    setTimeout(() => {
      expect(mainWrapper.state().alertMsg).toBe("");
    }, 2000);
  });

  it("check method - playSongFromMenu", () => {
    mainWrapper.instance().playSongFromMenu(1);
    expect(mainWrapper.state().currentSongId).toBe(1);
    expect(mainWrapper.state().currenttime).toBe(0);
    expect(mainWrapper.state().play).toBe(true);
    expect(mainWrapper.state().bottomMenuShow).toBeFalsy();
    expect(mainWrapper.state().sideMenuShow).toBeFalsy();
  });
});
