import React from "react";
import { mount } from "enzyme";
import { LoginProvider } from "../../store/context/Context";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

describe("test login form", () => {
  const wrapper = mount(
    <LoginProvider>
      <Login setPage={() => {}} setActiveForm={() => {}} />
    </LoginProvider>
  );
  it("render login form", () => {
    expect(wrapper.find("input").length).toEqual(2);
  });

  it("click input email", () => {
    const input = wrapper.find(Input).find("input#email");

    expect(input.length).toEqual(1);
  });
  it("click input password", () => {
    const input = wrapper.find(Input).find("input#password");

    expect(input.length).toEqual(1);
  });
  it("click button submit", () => {
    const button = wrapper.find(Button).find("button");

    expect(button.length).toEqual(1);
  });
});
