import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <section className="hero is-info is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">About the Team</h1>
            <h2 className="subtitle">
              Meet the hardworking individuals who drive InvisionAR
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="box is-flex">
                <figure class="image is-256x256">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/256x256.png"
                  />
                </figure>
                <p className="title">Shricharan K. S.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box is-flex">
                <figure class="image is-256x256">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/256x256.png"
                  />
                </figure>
                <p className="title">Tejas A.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
