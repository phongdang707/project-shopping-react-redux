import * as types from "./actionType";

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};
export const updateCart = (product, quantity) => {
  return {
    type: types.UPDATE_TO_CART,
    product,
    quantity
  };
};

export const removeCart = product => {
  return {
    type: types.REMOVE_TO_CART,
    product
  };
};
export const filter = (filterType, filterValue) => {
  return {
    type: types.FILTER,
    filterType,
    filterValue
  };
};
