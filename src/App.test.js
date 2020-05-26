import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Bars from "./components/Bar";
import BarSelect from "./components/BarSelect";
import Buttons from "./components/Buttons";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  state && wrapper.setState(state);
  return wrapper;
};

test("render without error", () => {
  const wrapper = setup();
  const appComponent = wrapper.find(".App");
  expect(appComponent.length).toBe(1);
});

test("render loading text", () => {
  const isLoading = true;
  const wrapper = setup(null, { isLoading });
  const appComponent = wrapper.find(".loading");
  expect(appComponent.length).toBe(1);
});

describe("page already loaded data from API", () => {
  let wrapper;
  beforeEach(() => {
    const isLoading = false;
    wrapper = setup(null, { isLoading });
  });
  test("render header", () => {
    const appComponent = wrapper.find(".App-header");
    expect(appComponent.length).toBe(1);
  });
  test("render progress bars component", () => {
    const appComponent = wrapper.find(Bars);
    expect(appComponent.length).toBe(1);
  });

  test("render select buttons wrapper", () => {
    const appComponent = wrapper.find(".select-buttons-wrapper");
    expect(appComponent.length).toBe(1);
  });

  test("render bar select component", () => {
    const appComponent = wrapper.find(BarSelect);
    expect(appComponent.length).toBe(1);
  });

  test("render button component", () => {
    const appComponent = wrapper.find(Buttons);
    expect(appComponent.length).toBe(1);
  });
});
