import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="banner-info">
            <img src="images/banner-1.jpg" className="img-banner" alt="" />
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Search..."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-search" /> Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
