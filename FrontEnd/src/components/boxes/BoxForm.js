import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { SketchPicker } from "react-color";

const BoxForm = ({
  box,
  color,
  onSave,
  onChange,
  onChangeColor,
  saving = false,
  errors = {},
  handleColorPicker,
  showPicker = false,
}) => {
  return (
    <form onSubmit={onSave} name="submitform">
      <h2>Add Box</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        id="name"
        name="name"
        label="Name"
        value={box.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        keyboardType="numeric"
        name="weight"
        label="Weight"
        value={box.weight ? String(box.weight) : ""}
        onChange={onChange}
        error={errors.weight}
      />

      <input
        type="button"
        value="Click to show Color picker"
        onClick={handleColorPicker}
        error={errors.color}
      />

      {showPicker && (
        <SketchPicker
          id="picker"
          color={color}
          onChange={onChangeColor}
          onChangeComplete={onChangeColor}
        />
      )}

      {errors.color && <div className="alert alert-danger">{errors.color}</div>}
      <SelectInput
        name="country"
        label="Country"
        value={box.country || ""}
        defaultOption="Select Country"
        options={countries.map((country) => ({
          value: country,
          text: country,
        }))}
        onChange={onChange}
        error={errors.country}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

BoxForm.propTypes = {
  box: PropTypes.object.isRequired,
  color: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool,
  onChangeColor: PropTypes.func.isRequired,
  handleColorPicker: PropTypes.func.isRequired,
  showPicker: PropTypes.bool,
};

const countries = ["Sweden", "China", "Brazil", "Australia"];

export default BoxForm;
