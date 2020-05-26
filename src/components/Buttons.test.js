import React from "react";
import { shallow } from "enzyme";
import Buttons from "./Buttons";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Buttons {...props} />);
  state && wrapper.setState(state);
  return wrapper;
};

test("render without error", () => {
  const wrapper = setup();
  const appComponent = wrapper.find(".buttons-wrapper");
  expect(appComponent.length).toBe(1);
});

describe("get a props for bars", () => {
  let wrapper;
  beforeEach(() => {
    const data = {
      buttons: [12, 68, 52],
    };
    wrapper = setup({ data }, null);
  });
  test("render 3 buttons", () => {
    const appComponent = wrapper.find(".button");
    expect(appComponent.length).toBe(3);
  });
});
