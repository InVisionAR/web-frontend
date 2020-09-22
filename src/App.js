/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.sass";
import Home from "./pages/home";
import About from "./pages/about";
import Apply from "./pages/apply";
import Quiz from "./pages/quiz";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <nav className="navbar is-fixed-top has-shadow">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" className={`navbar-menu ${open ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About Us
            </Link>
            <Link className="navbar-item" to="/apply">
              Join the team!
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/apply">
          <Apply />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
