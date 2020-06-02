import React from "react";
import { mount } from "enzyme";
import { boxes, newBox } from "../../../tools/mockData";
import { AddBoxPage } from "./AddBoxPage";

function render(args) {
  const defaultProps = {
    boxes,
    history: {},
    saveBox: jest.fn(),
    loadBoxes: jest.fn(),
    box: newBox,
    match: {},
  };

  const props = { ...defaultProps, ...args };

  return mount(<AddBoxPage {...props} />);
}

it("sets error when attempting to save an empty name field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Name is required.");
});

it("sets error when attempting to save an empty fields", () => {
  const wrapper = render();
  const form = wrapper.find("form");
  form.simulate("submit");
  const error = wrapper.find(".alert").length;
  expect(error).toBe(4);
});
