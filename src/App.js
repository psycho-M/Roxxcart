import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/index";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Shop from "./components/shop/Shop";
import Cart from "./components/Cart/Cart";
import Favorites from './components/Favorites/Favorites';
import "./components/FontawesomeIcons";
import ProductPage from "./components/productPage/productPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/Shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
