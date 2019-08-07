import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "../actions/index";

class Filter extends Component {
  render() {
    return (
      <nav className="nav-sidebar">
        <ul className="nav tabs">
          <li
            className="li active"
            onClick={this.props.filter.bind(this, "status", -1)}
          >
            Tất cả
          </li>
          <li
            className="li"
            onClick={this.props.filter.bind(this, "status", 1)}
          >
            Staples
          </li>
          <li
            className="li"
            onClick={this.props.filter.bind(this, "status", 2)}
          >
            Snacks
          </li>
          <li
            className="li"
            onClick={this.props.filter.bind(this, "status", 3)}
          >
            Fruits
          </li>
          <li
            className="li"
            onClick={this.props.filter.bind(this, "status", 4)}
          >
            Breakfast
          </li>
        </ul>
      </nav>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    filter: (filterType, filterValue) => {
      console.log(filterType);
      console.log(filterValue);

      dispatch(filter(filterType, filterValue));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Filter);
