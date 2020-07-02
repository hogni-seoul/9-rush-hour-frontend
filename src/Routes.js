import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "Pages/Main";
import SignUp from "Pages/SignUp";
import Brand from "Pages/Brand";
import Event from "Pages/Event";
import MyPage from "Pages/MyPage";
// import Product from "Pages/Product";
import ShoppingCart from "Pages/ShoppingCart";
import Login from "Pages/Login";
import Spa from "Pages/Spa";
import StoreInfo from "Pages/StoreInfo";
import Header from "Components/Header";
import Footer from "Components/Footer";
import GoodsInfo from "Components/GoodsInfo";
import GoodsReview from "Components/GoodsReview";
import GoodsDetail from "Components/GoodsDetail";
import Goods from "Components/Goods";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/brand" component={Brand} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/mypage" component={MyPage} />
          {/* <Route exact path="/product" component={Product} /> */}
          <Route exact path="/shoppingcart" component={ShoppingCart} />
          <Route exact path="/spa" component={Spa} />
          <Route exact path="/GoodsInfo" component={GoodsInfo} />
          <Route exact path="/storeinfo" component={StoreInfo} />
          <Route exact path="/GoodsReview" component={GoodsReview} />
          <Route exact path="/GoodsDetail" component={GoodsDetail} />
          <Route exact path="/Goods" component={Goods} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
