import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <nav className="nav-sidebar">
        <ul className="nav tabs ">
          <li className="active">
            <a href="#tab1" data-toggle="tab">
              Staples
            </a>
          </li>
          <li className="">
            <a href="#tab2" data-toggle="tab">
              Snacks
            </a>
          </li>
          <li className="">
            <a href="#tab3" data-toggle="tab">
              Fruits &amp; Vegetables
            </a>
          </li>
          <li className="">
            <a href="#tab4" data-toggle="tab">
              Breakfast &amp; Cereal
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Filter;
