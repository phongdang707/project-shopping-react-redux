import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <a href="offer">
        <img src="images/download.png" className="img-head" alt="" />
      </a>
      <div className="header">
        <div className="container">
          <div className="logo">
            <h1>
              <b>
                T<br />H<br />E
              </b>
              <Link to="/">
                Big Store<span>The Best Supermarket</span>
              </Link>
              {/* <Link to="/">Home</Link> */}
            </h1>
          </div>
          <div className="head-t">
            <ul className="card">
              <li>
                <a href="wishlist.html">
                  <i className="fa fa-heart" aria-hidden="true" />
                  Wishlist
                </a>
              </li>
              {!isAuthenticated && (
                <li>
                  <Link to="/" onClick={() => loginWithRedirect({})}>
                    <i className="fa fa-user" aria-hidden="true" />
                    Login
                  </Link>
                </li>
              )}

              <li>
                <a href="register.html">
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                  Register
                </a>
              </li>
              <li>
                <a href="about.html">
                  <i className="fa fa-file-text-o" aria-hidden="true" />
                  Order History
                </a>
              </li>
              <li>
                <a href="shipping.html">
                  <i className="fa fa-ship" aria-hidden="true" />
                  Shipping
                </a>
              </li>
            </ul>
          </div>
          <div className="header-ri">
            <ul className="social-top">
              <li>
                <a href="lala" className="icon facebook">
                  <i className="fa fa-facebook" aria-hidden="true" />
                  <span />
                </a>
              </li>
              <li>
                <a href="lala" className="icon twitter">
                  <i className="fa fa-twitter" aria-hidden="true" />
                  <span />
                </a>
              </li>
              <li>
                <a href="lala" className="icon pinterest">
                  <i className="fa fa-pinterest-p" aria-hidden="true" />
                  <span />
                </a>
              </li>
              <li>
                <a href="lala" className="icon dribbble">
                  <i className="fa fa-dribbble" aria-hidden="true" />
                  <span />
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-top">
            <nav className="navbar navbar-default">
              <div className="navbar-header nav_2">
                <button
                  type="button"
                  className="navbar-toggle collapsed navbar-toggle1"
                  data-toggle="collapse"
                  data-target="#bs-megadropdown-tabs"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-megadropdown-tabs"
              />
            </nav>
            <div className="cart">
              <Link to="/cart">
                <span className="fa fa-shopping-cart my-cart-icon">
                  <span className="badge badge-notify my-cart-badge" />
                </span>
              </Link>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

// src/components/NavBar.js

// const NavBar = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   return (
//     <div>
//       {!isAuthenticated && (
//         <button onClick={() => loginWithRedirect({})}>Log in</button>
//       )}

//       {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
//     </div>
//   );
// };

// export default NavBar;
