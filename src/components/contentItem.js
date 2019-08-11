import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions/index";

class ContentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      quantity: 1
    };
  }

  chuyenDoiURL = str => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };
  render() {
    var { product } = this.props;
    return (
      <div className="tab-pane active text-style">
        <div className=" con-w3l">
          <div className="col-md-3 m-wthree">
            <div className="col-m">
              <a
                href="lalal"
                data-toggle="modal"
                data-target="#myModal1"
                className="offer-img"
              >
                <img src={product.product.img} className="img-responsive" alt="" />
                <div className="offer">
                  <p>
                    <span>Offer</span>
                  </p>
                </div>
              </a>
              <div className="mid-1">
                <div className="women">
                  <h6>
                    <Link
                      to={
                        "/itemDetail/" +
                        this.chuyenDoiURL(product.product.name) +
                        "." +
                        product.id +
                        ".html"
                      }
                    >
                      {product.product.name}({product.product.kg} kg)
                    </Link>
                  </h6>
                </div>
                <div className="mid-2">
                  <div className="col-2">
                    <p>
                      {/* <label>${this.props.product.price}</label> */}
                      <em className="item_price">${product.product.price}</em>
                    </p>
                  </div>
                  <div className="">
                    <div className="icon" />
                  </div>
                  <div className="clearfix" />
                </div>
                <ul className="rating">
                  <li> {this.showRating(product.product.rating)}</li>
                </ul>
                <div className="add">
                  <button
                    className="btn btn-danger my-cart-btn my-cart-b "
                    data-image={product.product.img}
                    onClick={() => {
                      this.props.addToCart(product, 1);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showRating(rating) {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i key={i + 1} className="fa fa-star" />);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + 200} className="fa fa-star-o" />);
    }
    return result;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product, 1));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContentItem);
