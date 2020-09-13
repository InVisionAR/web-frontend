import React from "react";
import "./home.css";
import logo from "./img/logo-img.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body body">
          <div className="container has-text-centered">
            <figure class="image is-128x128 is-inline-block">
              <img class="is-rounded" alt="Logo" src={logo} />
            </figure>
            <h1 className="title" id="title">
              InvisionAR
            </h1>
            <p class="subtitle" className="slogan">
              InVisioning the future...
            </p>
            <Link to="/about">
              <button class="button is-primary" id="start-btn" to="#">
                <strong>GET STARTED</strong>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
