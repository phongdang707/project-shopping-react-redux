import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  showCartItem = cart => {
    cart.map((value, key) => {
      const result = value.product;
      console.log(result.name);
      return (
        <tr>
          <td>{result.name}</td>
          <td>{result.name}</td>
          <td title="Quantity">
            <input
              type="number"
              style={{ width: "70px" }}
              className="my-product-quantity"
              defaultValue={5}
            />
          </td>

          <td>john@example.com</td>
          <td>
            <a href="asd">
              <i className="fa fa-times-circle" />
            </a>
          </td>
        </tr>
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
          <tbody>{this.showCartItem(this.props.cart)}</tbody>
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
export default connect(mapStateToProps)(Cart);
