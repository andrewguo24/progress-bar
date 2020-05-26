import React from "react";
import { shallow } from "enzyme";
import BarSelect from "./BarSelect";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<BarSelect {...props} />);
  state && wrapper.setState(state);
  return wrapper;
};

test("render select without error", () => {
  const wrapper = setup();
  const appComponent = wrapper.find(".Bar-Select");
  expect(appComponent.length).toBe(1);
});

describe("get a props data for select", () => {
  let wrapper;
  beforeEach(() => {
    const data = {
      bars: [12, 68, 52, 19],
    };
    wrapper = setup({ data }, null);
  });
  test("render 3 select options", () => {
    const appComponent = wrapper.find("option");
    expect(appComponent.length).toBe(4);
  });
});
