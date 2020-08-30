import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Pages
import Main from "Pages/Main";
import Product from "Pages/Products";
import SignUp from "Pages/SignUp";
import Brand from "Pages/Brand";
import Event from "Pages/Event";
import MyPage from "Pages/MyPage";
import ShoppingCart from "Pages/ShoppingCart";
import Login from "Pages/Login";
import Spa from "Pages/Spa";
import Stores from "Pages/Stores";
import Goods from "Components/Goods";
import Detail from "Pages/Detail/Detail";

// Components
import Header from "Components/Header";
import Footer from "Components/Footer";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/products" component={Product} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/brand" component={Brand} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/shoppingcart" component={ShoppingCart} />
        <Route exact path="/spa" component={Spa} />

        <Route exact path="/stores" component={Stores} />
        <Route exact path="/Goods" component={Goods} />
        <Route exact path="/Detail" component={Detail} />
        <Route path="/" component={Main} />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
