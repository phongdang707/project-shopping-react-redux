// Chú ý:
// membersID:
// Priority -->1: Cao, 2: Thấp, 3: Trung bình
import * as types from "../actions/actionType";

const INITIAL_STATE = [
  {
    product: {
      id: 1,
      img: "images/of.png",
      name: "Moong",
      kg: 1,
      rating: 1,
      price: 15,
      status: 1,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  },
  {
    product: {
      id: 2,
      img: "images/of1.png",
      name: "Sunflower Oil",
      kg: 5,
      rating: 3,
      status: 1,
      price: 10,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  },
  {
    product: {
      id: 3,
      img: "images/of2.png",
      name: "Sunflower Oil",
      kg: 5,
      rating: 3,
      status: 2,
      price: 10,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  },
  {
    product: {
      id: 4,
      img: "images/of3.png",
      name: "Soya Chunks",
      kg: 5,
      rating: 3,
      status: 1,
      price: 2,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  },
  {
    product: {
      id: 5,
      img: "images/of2.png",
      name: "phong",
      kg: 1,
      status: 1,
      rating: 1,
      price: 15,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  }
];

export default (state = INITIAL_STATE, action) => {
  var { product } = action;
  switch (action.type) {
    case types.ADD_NEW_PRODUCT:
      console.log("state");
      console.log(state);
      console.log("action");
      console.log(action);
      state.push({
        product
      });
      localStorage.setItem("ADMIN", JSON.stringify(state));
      return [...state];
    default:
      localStorage.setItem("DATA", JSON.stringify(state));
      return state;
  }
};
