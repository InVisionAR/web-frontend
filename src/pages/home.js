import React from "react";
import "./home.css";
import logo from "./img/logo.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body body">
          <div className="container">
            <img src={logo} alt="Logo" class="logo-img" />
            <h1 className="title" id="title">InvisionAR</h1>
            <p className="slogan">InVisioning the future...</p>
            <Link to="/about"><button class="button is-primary" id="start-btn" to="#"><strong>GET STARTED</strong></button></Link>
            <div className="footer">
              <p>&copy; 2020 InVision AR</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
