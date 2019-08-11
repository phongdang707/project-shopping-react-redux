import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewProduct } from "../../actions/index";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: 0,
      quantity: 0,
      category: -1,
      img: ""
    };
  }

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log("TCL: AddProduct -> e.target.value", e.target.value);
    // console.log("TCL: AddProduct -> e.target.name", e.target.name);
  };
  onSubmit = e => {
    e.preventDefault();
    let product;
    product = {
      ...this.state,
      id: "",
      name: this.state.name,
      price: this.state.price,
      category: parseInt(this.state.category, 10),
      quantity: this.state.quantity,
      img: this.state.img
    };
    this.props.addNewProduct(product);
  };
  render() {
    return (
      <div>
        <div className="left-content">
          <form onSubmit={this.onSubmit}>
            <div className="mother-grid-inner">
              {/*header start here*/}
              {/*heder end here*/}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>{" "}
                  <i className="fa fa-angle-right" />
                </li>
              </ol>
              <div>
                <div className="form-group">
                  <label htmlFor="usr">Name:</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="usr"
                    onChange={this.onchange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="usr">Price:</label>
                  <input
                    name="price"
                    type="number"
                    className="form-control"
                    id="usr"
                    onChange={this.onchange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="usr">Quantity:</label>
                  <input
                    name="quantity"
                    type="number"
                    className="form-control"
                    id="usr"
                    onChange={this.onchange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="usr">Category:</label>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    onChange={this.onchange}
                    value={this.state.category}
                  >
                    <option value={-1}>Select category</option>
                    <option value={1}>Staples </option>
                    <option value={2}>Snacks </option>
                    <option value={3}>Fruits</option>
                    <option value={4}>Breakfast</option>
                  </select>
                </div>

                <div className="custom-file">
                  <input
                    name="img"
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={this.onchange}
                  />
                </div>

                <button type="submit" className="btn phong">
                  Add Product
                </button>
              </div>

              <div className="copyrights">
                <p>
                  © 2016 Pooled. All Rights Reserved | Design by{" "}
                  <a href="http://w3layouts.com/">W3layouts</a>{" "}
                </p>
              </div>
              {/*COPY rights end here*/}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNewProduct: product => {
      dispatch(addNewProduct(product));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddProduct);
