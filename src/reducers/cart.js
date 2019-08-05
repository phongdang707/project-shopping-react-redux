// import data from "./data";
import * as types from "../actions/actionType";

var jsonCart = JSON.parse(localStorage.getItem("CART"));

const INITIAL_STATE = jsonCart ? jsonCart : [];
var index = -1;
var findProductInCart = (cart, product) => {
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default (state = INITIAL_STATE, action) => {
  var { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity++;
      } else {
        state.push({
          product,
          quantity
        });
      }
      // console.log(action);
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.UPDATE_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.REMOVE_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
