import { combineReducers } from "redux";
import cart from "./cart";
import data from "./data";
import filter from "./filter";
import addNewProduct from "./addNewProduct";

const allReducer = combineReducers({
  addNewProduct,
  filter,
  cart,
  data
});
export default allReducer;
