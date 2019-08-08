import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-menu">
          <div className="menu">
            <ul id="menu">
              <li>
                <Link to="/admin">
                  <i className="fa fa-tachometer" /> <span>Product</span>
                  <div className="clearfix" />
                </Link>
              </li>
              <li id="menu-academico">
                <Link to="/addProduct">
                  <i className="fa fa-envelope nav_icon" />
                  <span>Add Product</span>
                  <div className="clearfix" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
