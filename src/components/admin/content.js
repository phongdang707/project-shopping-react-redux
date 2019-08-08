import React, { Component } from "react";
import { connect } from "react-redux";
import ContentItem from "./contentItem";

class Content extends Component {
  showItem = () => {
    return this.props.data.map((value, key) => {
      return <ContentItem value={value} key={key} />;
    });
  };
  render() {
    // console.log(this.props.data);

    return (
      <div>
        <div className="left-content">
          <div className="mother-grid-inner">
            {/*header start here*/}
            <div className="header-main">
              <div className="w3layouts-left">
                {/*search-box*/}
                {/*//end-search-box*/}
                <div className="clearfix"> </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            {/*heder end here*/}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>{" "}
                <i className="fa fa-angle-right" />
              </li>
            </ol>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{this.showItem()}</tbody>
            </table>
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
const mapStateToProps = state => {
  return {
    data: state.data
  };
};
export default connect(
  mapStateToProps,
  null
)(Content);
