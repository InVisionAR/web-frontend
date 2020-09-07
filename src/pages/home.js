import React from "react";
import "./style.css";

export default function Home() {
  return (
    <>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body body">
          <div className="container">
            <h1 className="title" id="title">InvisionAR</h1>
            <p className="slogan">InVisioning the future...</p>
            <button class="button is-primary" id="start-btn" to="#"><strong>GET STARTED</strong></button>
          </div>
        </div>
      </section>
    </>
  );
}