import React from "react";
import { shallow } from "enzyme";
import { ItemButton } from "./ItemButton";

describe("ItemButton tests", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<ItemButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should fire onItemAdd when button is clicked", () => {
    const itemAdd = jest.fn();
    const wrapper = shallow(<ItemButton onItemAdd={itemAdd} />);
    wrapper.find("button").simulate("click");
    expect(itemAdd).toHaveBeenCalled();
  });
});
