import React, { Component } from "react";
import Filter from "./filter";
import ContentItem from "./contentItem";
import { connect } from "react-redux";

class Content extends Component {
  render() {
    const ContentElm = this.props.products.map((product, index) => {
      return <ContentItem key={index} product={product} />;
    });
    return (
      <div className="content-top ">
        <div className="container ">
          <div className="spec ">
            <h3>Special Offers</h3>
            <div className="ser-t">
              <b />
              <span>
                <i />
              </span>
              <b className="line" />
            </div>
          </div>
          <div className="tab-head ">
            {/* filter */}
            <Filter />
            <div className=" tab-content tab-content-t ">{ContentElm}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
