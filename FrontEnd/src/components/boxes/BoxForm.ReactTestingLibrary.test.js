import React from "react";
import { cleanup, render } from "react-testing-library";
import BoxForm from "./BoxForm";

afterEach(cleanup);

function renderBoxForm(args) {
  let defaultProps = {
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
  return render(<BoxForm {...props} />);
}

it("should render Add Box header", () => {
  const { getByText } = renderBoxForm();
  getByText("Add Box");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderBoxForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText, debug } = renderBoxForm({ saving: true });
  // debug();
  getByText("Saving...");
});
