import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";
import Login from "../../components/Login/Login";

it("render shallow", () => {
  const wrapper = shallow(<Main />);
  expect(wrapper.contains(<Login />)).toEqual(true);
});
