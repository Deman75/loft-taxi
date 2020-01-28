import React from "react";
import { mount } from "enzyme";
import Main from "./Main";
import { LoginProvider } from "../../store/context/Context";

describe("some test", () => {
  it("render shallow", () => {
    const wrapper = mount(
      <LoginProvider>
        <Main setPage={() => {}}></Main>
      </LoginProvider>
    );
    expect(wrapper.find(".login").length).toEqual(1);
  });
});
