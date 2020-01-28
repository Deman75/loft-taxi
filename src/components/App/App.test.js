import React from "react";
import { shallow } from "enzyme";
import App from "./App";

jest.mock("MapAPI");

describe("test app js", () => {
  it("render app", () => {
    const wrapper = shallow(<App />);
  });
});
