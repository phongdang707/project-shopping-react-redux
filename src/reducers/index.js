import { combineReducers } from "redux";
import cart from "./cart";
import data from "./data";
import adminProduct from "./adminProduct";
import filter from "./filter";

const allReducer = combineReducers({
  adminProduct,
  filter,
  cart,
  data
});
export default allReducer;
