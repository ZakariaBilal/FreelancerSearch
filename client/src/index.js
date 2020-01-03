import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//Static Components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product

import LandingPage from "views/LandingPage/LandingPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Header
      brand='FreeService'
      fixed
      leftLinks={<span />}
      rightLinks={<HeaderLinks />}
    />
    <Switch>
      <Route path='/' component={LandingPage} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);
