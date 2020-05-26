import React from "react";
import { shallow } from "enzyme";
import Bars from "./Bar";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Bars {...props} />);
  state && wrapper.setState(state);
  return wrapper;
};

test("render progress bars without error", () => {
  const wrapper = setup();
  const appComponent = wrapper.find(".bar-container");
  expect(appComponent.length).toBe(1);
});

describe("get a props for bars", () => {
  let wrapper;
  beforeEach(() => {
    const data = {
      bars: [12, 68, 52],
    };
    wrapper = setup({ data }, null);
  });
  test("render 3 progress bars", () => {
    const appComponent = wrapper.find(".bar");
    expect(appComponent.length).toBe(3);
  });
  test("render 3 progress number", () => {
    const appComponent = wrapper.find(".progress");
    expect(appComponent.length).toBe(3);
  });
  test("render 3 progress bars", () => {
    const appComponent = wrapper.find(".progress-number");
    expect(appComponent.length).toBe(3);
  });
});
