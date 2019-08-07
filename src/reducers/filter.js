import * as types from "../actions/actionType";

const INITIAL_STATE = {
  filterType: "",
  filterValue: -1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FILTER:
      state = {
        filterType: action.filterType,
        filterValue: action.filterValue
      };
      console.log("====================================");
      console.log(state);
      console.log("====================================");
      return { ...state };
    default:
      return state;
  }
};
