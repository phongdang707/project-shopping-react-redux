import React, { Component } from "react";
import Content from "./content";
import Sidebar from "./sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import AddProduct from "./addProduct";

class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Sidebar />
              <div className="clearfix" />
            </div>
            <div className="col-8">
              <Route exact path="/admin" component={Content} />
              <Route exact path="/addProduct" component={AddProduct} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default index;
