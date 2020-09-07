import React from "react";

{/* Styling Start */ }

const body = {
  backgroundColor: "#2B2D42",
};

const title = {
  textAlign: "center",
  color: "#D90429",
  fontSize: "80px"
};

const slogan = {
  color: "#EF233C",
  textAlign: "center",
  fontSize: "30px"
};

const start_btn = {
  backgroundColor: "#8D99AE",
  color: "#EDF2F4",
  fontSize: "20px",
  justifyContent: "center",
  alignSelf: "center",
  alignItems: "center"
};

{/* Styling End */ }

export default function Home() {
  return (
    <>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body" style={body}>
          <div className="container">
            <h1 className="title" style={title}>InvisionAR</h1>
            <p style={slogan}>InVisioning the future...</p>
            <button class="button is-primary" to="#" style={start_btn}><strong>GET STARTED</strong></button>
          </div>
        </div>
      </section>
    </>
  );
}
