import { combineReducers } from "redux";
import cart from "./cart";
import data from "./data";

const allReducer = combineReducers({
  cart,
  data
});
export default allReducer;
