import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function boxReducer(state = initialState.boxes, action) {
  switch (action.type) {
    case types.CREATE_BOX_SUCCESS:
      return [...state, { ...action.box }];
    case types.LOAD_BOXES_SUCCESS:
      return action.boxes;
    default:
      return state;
  }
}
