import React, { Component } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Content from "./components/content";
import Footer from "./components/footer";
import Fashion from "./components/fashion";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import itemDetail from "./components/itemDetail";
import Cart from "./components/cart";
import Index from "./components/admin/index";

// import { privateRoutes, publicRoutes } from "./routes";
import { useAuth0 } from "./react-auth0-wrapper";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Banner} />
        <Route exact path="/" component={Content} />
        <Route exact path="/home" component={Content} />
        <Route exact path="/itemDetail/:slug.:id.html" component={itemDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Fashion} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/admin" component={Index} />
      </BrowserRouter>
    </div>
  );
}

export default App;
