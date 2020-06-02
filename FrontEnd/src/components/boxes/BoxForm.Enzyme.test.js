import React from "react";
import BoxForm from "./BoxForm";
import { shallow } from "enzyme";

function renderBoxForm(args) {
  const defaultProps = {
    box: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
    color: { r: 0, g: 0, b: 0 },
    handleColorPicker: () => {},
    onChangeColor: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<BoxForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderBoxForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Box");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderBoxForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderBoxForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
