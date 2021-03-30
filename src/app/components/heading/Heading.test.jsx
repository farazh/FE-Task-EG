import React from "react";
import { shallow } from "enzyme";
import { Heading } from "./Heading";

describe("Heading tests", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper).toMatchSnapshot();
  });
});
