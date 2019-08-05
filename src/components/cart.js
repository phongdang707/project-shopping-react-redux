import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./cartItem";
import { updateCart, removeCart } from "../actions/index";

class Cart extends Component {
  showCartItem = () => {
    return this.props.cart.map((value, key) => {
      return (
        <CartItem
          value={value}
          key={key}
          cart={this.props.cart}
          update={this.props.update}
          remove={this.props.remove}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Cart</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Xóa sản phẩm</th>
            </tr>
          </thead>
          <tbody>{this.showCartItem()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    update: (product, quantity) => {
      dispatch(updateCart(product, quantity));
    },
    remove: product => {
      dispatch(removeCart(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
