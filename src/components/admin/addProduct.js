import React, { Component } from "react";
import { connect } from "react-redux";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      Name: "",
      Price: -1,
      priority: -1,
      quantity: -1,
      category: [],
      file: ""
    };
  }

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log([e.target.name]);
    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <div className="left-content">
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
                  name="Name"
                  type="text"
                  className="form-control"
                  id="usr"
                  onChange={this.onchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="usr">Price:</label>
                <input
                  name="Price"
                  type="number"
                  className="form-control"
                  id="usr"
                  onChange={this.onchange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="usr">Quantity:</label>
                <input
                  name="Quantity"
                  type="number"
                  className="form-control"
                  id="usr"
                  onChange={this.onchange}
                />
              </div>
              <div>
                <form>
                  <select name="cars" className="custom-select-lg">
                    <option selected>Category</option>
                    <option value="1">Staples</option>
                    <option value="2">Snacks</option>
                    <option value="3">Fruits</option>
                    <option value="4">Breakfast</option>
                  </select>
                </form>
                <form>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                  </div>
                </form>
              </div>
              <button type="button" className="btn btn-primary phong">
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
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch1: () => {
      dispatch();
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddProduct);
