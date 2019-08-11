import React, { Component } from "react";
import Filter from "./filter";
import ContentItem from "./contentItem";
import { connect } from "react-redux";

class Content extends Component {
  render() {
    let { products } = this.props;
    console.log("TCL: Content -> render -> products", products)
    var filterProduct = [];
    
    // console.log(this.props.filter.filterType);
    // console.log(this.props.filter.filterValue);
    console.log(
      "TCL: Content -> render -> this.props.filter.filterValue",
      this.props.filter.filterValue
    );

    switch (this.props.filter.filterType) {
      case "status":
        if (parseInt(this.props.filter.filterValue, 10) === -1) {
          filterProduct = products;

          break;
        } else {
          for (let item of products) {
            if (item.product.status === this.props.filter.filterValue) {
              console.log("vào elese");
              filterProduct = [...filterProduct, item];
            }
          }
        }
        break;
      case "":
        filterProduct = products;
        break;
      default:
        break;
    }
    console.log(filterProduct);
    const ContentElm = filterProduct.map((product, index) => {
      console.log("trong ren", filterProduct);

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
    products: state.data,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
