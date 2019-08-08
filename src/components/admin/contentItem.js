import React, { Component } from "react";

class ContentItem extends Component {
  render() {
    var img = "../" + this.props.value.img;
    return (
      <tr>
        <td>{this.props.value.name}</td>
        <td>
          <img src={img} alt={this.props.value.img} />
        </td>
        <td>{this.props.value.price}</td>
        <td>
          <button type="button" className="btn btn-success">
            <i className="fa fa-eye" />
          </button>
          <button type="button" className="btn btn-warning">
            <i className="fa fa-edit" />
          </button>
          <button type="button" className="btn btn-danger">
            <i class="fa fa-trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export default ContentItem;
