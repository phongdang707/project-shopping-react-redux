import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class itemDetail extends Component {
  render() {
    const item = this.props.products.map((value, key) => {
      if (value.id === parseInt(this.props.match.params.id, 20)) {
        // console.log("====================================");
        // console.log(value.img);
        // console.log("====================================");
        return (
          <div key={key}>
            <div className="banner-top">
              <div className="container">
                <h3>{value.name}</h3>
                <h4>
                  <Link to="/">Home</Link>
                  <label>/</label>
                  Detail
                </h4>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="single" key={key}>
              <div className="container">
                <div className="single-top-main">
                  <div className="col-md-5 single-top">
                    <div className="single-w3agile">
                      <div id="picture-frame">
                        <img
                          src={"../" + value.img}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 single-top-left ">
                    <div className="single-right">
                      <h3>{value.name}</h3>
                      <div className="pr-single">
                        <p className="reduced ">
                          <del />${value.price}
                        </p>
                      </div>
                      <div className="block block-w3">
                        <div className="starbox small ghosting"> </div>
                      </div>
                      <p className="in-pa">{value.description}</p>
                      <ul className="social-top">
                        <li>
                          <a href="face.as" className="icon facebook">
                            <i className="fa fa-facebook" aria-hidden="true" />
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="face.as" className="icon twitter">
                            <i className="fa fa-twitter" aria-hidden="true" />
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="face.as" className="icon pinterest">
                            <i
                              className="fa fa-pinterest-p"
                              aria-hidden="true"
                            />
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="face.as" className="icon dribbble">
                            <i className="fa fa-dribbble" aria-hidden="true" />
                            <span />
                          </a>
                        </li>
                      </ul>
                      <div className="add add-3">
                        <button
                          className="btn btn-danger my-cart-btn my-cart-b"
                          data-id={1}
                          data-name="Wheat"
                          data-summary="summary 1"
                          data-price={6.0}
                          data-quantity={1}
                          data-image="images/si.jpg"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return true;
      }
    });
    return (
      <div>
        {/**/}
        {item}
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
)(itemDetail);
