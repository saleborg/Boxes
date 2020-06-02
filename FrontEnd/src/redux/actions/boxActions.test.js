import * as boxActions from "./boxesActions";
import * as types from "./actionTypes";
import { boxes } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Boxes Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_BOXES_SUCCESS when loading boxes", () => {
      fetchMock.mock("*", {
        body: boxes,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_BOXES_SUCCESS, boxes },
      ];

      const store = mockStore({ boxes: [] });
      return store.dispatch(boxActions.loadBoxes()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createBoxSuccess", () => {
  it("should create a CREATE_BOX_SUCCESS action", () => {
    //arrange
    const box = boxes[0];
    const expectedAction = {
      type: types.CREATE_BOX_SUCCESS,
      box,
    };

    //act
    const action = boxActions.createBoxSuccess(box);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
