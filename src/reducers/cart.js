// import data from "./data";
import * as types from "../actions/actionType";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      // console.log(action);
      return [...state, action];
    default:
      return [...state];
  }
};
