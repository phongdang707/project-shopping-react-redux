import React, { Component } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";
import Fashion from "./components/fashion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import itemDetail from "./components/itemDetail";
import Cart from "./components/cart";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Banner} />
          <Route exact path="/" component={Content} />
          <Route exact path="/home" component={Content} />
          <Route
            exact
            path="/itemDetail/:slug.:id.html"
            component={itemDetail}
          />
          <Route exact path="/cart" component={Cart} />
          <Fashion />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
