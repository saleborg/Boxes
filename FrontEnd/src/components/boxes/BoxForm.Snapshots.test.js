import React from "react";
import BoxForm from "./BoxForm";
import renderer from "react-test-renderer";
import { boxes } from "../../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const box = boxes[0];
  const color = { r: 0, g: 0, b: 0 };
  const tree = renderer.create(
    <BoxForm
      box={box}
      onChange={jest.fn}
      onSave={jest.fn}
      saving
      color={color}
      handleColorPicker={jest.fn}
      onChangeColor={jest.fn}
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const box = boxes[0];
  const color = { r: 0, g: 0, b: 0 };
  const tree = renderer.create(
    <BoxForm
      box={box}
      onChange={jest.fn}
      onSave={jest.fn}
      saving={false}
      color={color}
      handleColorPicker={jest.fn}
      onChangeColor={jest.fn}
    />
  );

  expect(tree).toMatchSnapshot();
});
