import React from "react";
import "./about.css";
import PersonBox from "components/pages/about/PersonBox";

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
      <section className="section" id="leaders">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="box is-flex">
                <figure className="image is-256x256">
                  <img
                    className="is-rounded"
                    src="https://bulma.io/images/placeholders/256x256.png"
                  />
                </figure>
                <p className="title">Shricharan K. S.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box is-flex">
                <figure className="image is-256x256">
                  <img
                    className="is-rounded"
                    src="https://bulma.io/images/placeholders/256x256.png"
                  />
                </figure>
                <p className="title">Tejas A.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section team" id="web-team">
        <div className="container is-fluid">
          <h1 className="title">Web Development Team</h1>
          <div className="columns is-multiline">
            <PersonBox name="somebody" caption="Web Development Team Leader" />
            <PersonBox name="that" />
            <PersonBox name="I" />
            <PersonBox name="used" />
            <PersonBox name="to" />
          </div>
        </div>
      </section>
      <section className="section team" id="app-team">
        <div className="container">
          <h1 className="title">App Development Team</h1>
          <div className="columns is-multiline">
            <PersonBox name="somebody" caption="App Development Team Leader" />
            <PersonBox name="that" />
            <PersonBox name="I" />
            <PersonBox name="used" />
            <PersonBox name="to" />
          </div>
        </div>
      </section>
      <section className="section team" id="content-team">
        <div className="container">
          <h1 className="title">Content Management Team</h1>
          <div className="columns is-multiline">
            <PersonBox
              name="somebody"
              caption="Content Management Team Leader"
            />
            <PersonBox name="that" />
            <PersonBox name="I" />
            <PersonBox name="used" />
            <PersonBox name="to" />
          </div>
        </div>
      </section>
      <section className="section team" id="graphics-team">
        <div className="container">
          <h1 className="title">Graphic Design Team</h1>
          <div className="columns is-multiline">
            <PersonBox name="somebody" caption="Graphic Design Team Leader" />
            <PersonBox name="that" />
            <PersonBox name="I" />
            <PersonBox name="used" />
            <PersonBox name="to" />
          </div>
        </div>
      </section>
      <section className="section team" id="social-media-team">
        <div className="container">
          <h1 className="title">Social Media Management Team</h1>
          <div className="columns is-multiline">
            <PersonBox name="somebody" caption="Social Media Team Leader" />
            <PersonBox name="that" />
            <PersonBox name="I" />
            <PersonBox name="used" />
            <PersonBox name="to" />
          </div>
        </div>
      </section>
    </>
  );
}
