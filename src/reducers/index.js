import { combineReducers } from "redux";
import cart from "./cart";
import data from "./data";
import filter from "./filter";

const allReducer = combineReducers({
  filter,
  cart,
  data
});
export default allReducer;
