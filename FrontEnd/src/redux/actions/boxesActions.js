import * as types from "./actionTypes";
import * as boxesApi from "../../api/boxesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBoxesSuccess(boxes) {
  return { type: types.LOAD_BOXES_SUCCESS, boxes };
}

export function createBoxSuccess(box) {
  return { type: types.CREATE_BOX_SUCCESS, box };
}

export function loadBoxes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return boxesApi
      .getBoxes()
      .then((boxes) => {
        dispatch(loadBoxesSuccess(boxes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

function calculateShippingCost(box) {
  switch (box.country) {
    case "Sweden":
      return 1.3 * parseInt(box.weight);
    case "China":
      return 4 * parseInt(box.weight);
    case "Brazil":
      return 8.6 * parseInt(box.weight);
    case "Australia":
      return 7.2 * parseInt(box.weight);
    default:
      return 0;
  }
}

export function saveBox(box) {
  const BoxDAO = {
    name: box.name,
    color: box.color,
    weight: box.weight,
    shippingcost: calculateShippingCost(box),
  };
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return boxesApi
      .saveBox(BoxDAO)
      .then((savedBox) => {
        dispatch(createBoxSuccess(savedBox));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
