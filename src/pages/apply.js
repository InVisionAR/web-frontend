import React from "react";
import "./apply.css";

export default function Apply() {
  return (
    <section className="hero is-info is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Interested in joining our team?</h1>
          <h2 className="subtitle">
            {/* The space thing is necessary for some formatting related reason. */}
            Fill out this{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScczP0F5dSpud8TIFmrVhVvzHkl02bU6ZP9KR4jyafYPMBtQw/viewform?usp=sf_link"
              id="form-link"
            >
              Google Form
            </a>{" "}
            and we'll get back to you as soon as possible.
          </h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScczP0F5dSpud8TIFmrVhVvzHkl02bU6ZP9KR4jyafYPMBtQw/viewform?embedded=true"
            width="100%"
            height="550"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Application form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
