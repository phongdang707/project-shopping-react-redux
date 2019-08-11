import * as types from "../actions/actionType";
var jsonCart = JSON.parse(localStorage.getItem("ADMIN"));
const INITIAL_STATE = jsonCart ? jsonCart : [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_ADMIN:
      localStorage.setItem("ADMIN", JSON.stringify(state));
      return { ...state };
    default:
      return state;
  }
};
