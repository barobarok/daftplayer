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
});
