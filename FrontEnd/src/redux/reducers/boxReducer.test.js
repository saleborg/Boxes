import boxReducer from "./boxReducer";
import * as actions from "../actions/boxesActions";

it("should add box when passed CREATE_BOX_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      name: "A",
    },
    {
      name: "B",
    },
  ];

  const newBox = {
    name: "C",
  };

  const action = actions.createBoxSuccess(newBox);

  // act
  const newState = boxReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].name).toEqual("A");
  expect(newState[1].name).toEqual("B");
  expect(newState[2].name).toEqual("C");
});
