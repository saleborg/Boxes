import React, { useState } from "react";
import { connect } from "react-redux";
import { saveBox } from "../../redux/actions/boxesActions";
import PropTypes from "prop-types";
import BoxForm from "./BoxForm";
import { toast } from "react-toastify";

export function AddBoxPage({ saveBox, history, ...props }) {
  const [box, setBox] = useState({ ...props.box });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [colorObj, setColor] = useState({});
  const [showPicker, setShowPicker] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setBox((prevBox) => ({
      ...prevBox,
      [name]: value,
    }));
  }

  function handleColorPicker() {
    setShowPicker(!showPicker);
  }

  function onChangeColor(newColor) {
    const { rgb, hex } = newColor;
    setColor((prevColor) => ({
      ...prevColor,
      hex,
    }));
    setBox((prevBox) => ({
      ...prevBox,
      color: rgb.r + "," + rgb.g + "," + rgb.b,
    }));
  }

  function formIsValid() {
    const { name, country, weight, color } = box;
    const errors = {};

    if (!name) errors.name = "Name is required.";
    if (!country) errors.country = "Country is required";
    if (weight) {
      const weightInt = parseInt(weight);
      if (!Number.isInteger(weightInt)) {
        errors.weight = "Weight has to be a number";
      } else if (weightInt <= 0) {
        errors.weight = "Weight has to be a positive number, deafulting to 0";
        setBox((prevBox) => ({
          ...prevBox,
          weight: "0",
        }));
      }
    } else {
      errors.weight = "Weight is required";
    }

    if (!weight) if (!color) errors.color = "Colour is required";
    const blue = color.split(",").pop();
    if (blue > 0) errors.color = "No kind of blue is allowed";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveBox(box)
      .then(() => {
        toast.success("Box saved.");
        history.push("/listboxes");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return (
    <BoxForm
      box={box}
      color={colorObj}
      errors={errors}
      onChange={handleChange}
      onChangeColor={onChangeColor}
      onSave={handleSave}
      saving={saving}
      handleColorPicker={handleColorPicker}
      showPicker={showPicker}
    />
  );
}

AddBoxPage.propTypes = {
  box: PropTypes.object.isRequired,
  saveBox: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps() {
  const newBox = {
    id: "",
    name: "",
    color: "",
    weight: "",
    country: "",
  };

  const box = newBox;

  return {
    box,
  };
}

const mapDispatchToProps = {
  saveBox,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBoxPage);
