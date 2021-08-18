import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/index";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
// import Navbar from "./components/header/Navbar";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/Shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
