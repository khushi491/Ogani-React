import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/elegant-icons.css";

import Layout from "./layout/layout";
import Home from "./view/Home/Home";
import Blog from "./view/Blog/Blog";
import BlogDetails from "./view/BlogDetails/BlogDetails";
import Checkout from "./view/Checkout/Checkout";
import Contact from "./view/Contact/Contact";
import ShopDetails from "./view/ShopDetails/ShopDetails";
import ShopGrid from "./view/ShopGrid/ShopGrid";
import ShopingCart from "./view/ShopingCart/ShopingCart";
import "./assets/sass/style.scss";
import "./assets/css/nice-select.css";

import "./assets/css/style.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/blog" exact component={Blog} />
            <Route path="/blogDetails" exact component={BlogDetails} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/shopDetails" exact component={ShopDetails} />
            <Route path="/shopGrid" exact component={ShopGrid} />
            <Route path="/shopingCart" exact component={ShopingCart} />
            <Route path="/" exact component={Home} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
