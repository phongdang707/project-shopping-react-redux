import React, { Component } from "react";
import CartResult from "./cartResult";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  totalProduct = (quantity, price) => {
    parseInt(quantity);
    parseInt(price);
    return quantity * price;
  };
  showTotalAmount = cart => {
    var total = 0;
    // console.log(cart[1].product.price);
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].product.price * cart[i].quantity;
      // console.log(total);
      console.log("TCL: CartItem -> total", total);
    }
    return <CartResult total={total} />;
  };
  render() {
    return (
      <>
        <tr>
          <td>{this.props.value.product.name}</td>
          <td>{this.props.value.product.price}</td>
          <td title="Quantity">
            <input
              name="quantity"
              onChange={this.onChange}
              type="number"
              style={{ width: "70px" }}
              className="my-product-quantity"
              defaultValue={this.props.value.quantity}
              onClick={() =>
                this.updateQuantity(
                  this.props.value.product,
                  parseInt(this.state.quantity)
                )
              }
            />
          </td>
          <td>
            {this.totalProduct(
              this.props.value.quantity,
              this.props.value.product.price
            )}
          </td>
          <td>
            <button
              type="button"
              onClick={() => {
                this.props.remove(this.props.value.product);
              }}
            >
              <i className="fa fa-times-circle" />
            </button>
          </td>
        </tr>
      </>
    );
  }
  updateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.setState({
        quantity: quantity
      });
      this.props.update(product, quantity);
    }
  };
}

export default CartItem;
