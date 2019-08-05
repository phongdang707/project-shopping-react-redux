import React, { Component } from "react";

class CartResult extends Component {
  render() {
    console.log("====================================");
    console.log(this.props.total);
    console.log("====================================");
    return (
      <tr>
        <td>Thành tiền</td>
        <td />
        <td />
        <td>{this.props.total}</td>
        <td />
      </tr>
    );
  }
}

export default CartResult;
