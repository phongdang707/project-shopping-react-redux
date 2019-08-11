import React, { Component } from "react";

class ContentItem extends Component {
  render() {
    var img = this.props.value.product.img;
    console.log("====================================");
    console.log(img);
    console.log("====================================");
    return (
      <tr>
        <td>{this.props.value.product.name}</td>
        <td>
          <img
            src={img}
            alt={this.props.value.product.img}
            className="img_admin"
          />
        </td>
        <td>{this.props.value.product.price}</td>
        <td>
          <button type="button" className="btn btn-success">
            <i className="fa fa-eye" />
          </button>
          <button type="button" className="btn btn-warning">
            <i className="fa fa-edit" />
          </button>
          <button type="button" className="btn btn-danger">
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export default ContentItem;
