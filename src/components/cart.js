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
  showTotalAmount = cart => {
    var total = 0;
    // console.log(cart[1].product.price);
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].product.price * cart[i].quantity;
      // console.log(total);
      console.log("TCL: CartItem -> total", total);
    }
    return (
      <tr>
        <td>Thành tiền</td>
        <td />
        <td />
        <td>{total}</td>
        <td />
      </tr>
    );
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
          <tbody>{this.showTotalAmount(this.props.cart)}</tbody>
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
