import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Utils
import ScrollToTop from "Utils/ScrollToTop";

// Pages
import Main from "Pages/Main";
import Product from "Pages/Products";
import Stores from "Pages/Stores";

// Components
import Header from "Components/Header";
import Footer from "Components/Footer";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/stores" component={Stores} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
