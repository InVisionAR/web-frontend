import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.sass";
import Home from "./pages/home";
import About from "./pages/about";
import Apply from "./pages/apply";
import Navbar from "components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/apply">
          <Apply />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
