import * as types from "../actions/actionType";
import data from "./data";

const INITIAL_STATE = data ? data : [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_NEW_PRODUCT:
      return { ...state };
    default:
      return state;
  }
};
