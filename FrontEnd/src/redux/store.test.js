import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as boxActions from "./actions/boxesActions";

it("Should handle creating boxes", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const box = {
    name: "Anders Andersson",
  };

  // act
  const action = boxActions.createBoxSuccess(box);
  store.dispatch(action);

  // assert
  const createdBox = store.getState().boxes[0];
  expect(createdBox).toEqual(box);
});
