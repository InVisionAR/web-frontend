import React from "react";
import "./about.css";
import TeamSection from "components/pages/about/TeamSection";
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
                    alt="Shri"
                  />
                </figure>
                <p className="title">Shricharan K. S.</p>
                <p className="has-text-centered">
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
                    alt="Tejas"
                  />
                </figure>
                <p className="title">Tejas A.</p>
                <p className="has-text-centered">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection name="Web Development Team">
        <PersonBox name="somebody" caption="Web Development Team Leader" />
        <PersonBox name="that" />
        <PersonBox name="I" />
        <PersonBox name="used" />
        <PersonBox name="to" />
      </TeamSection>
      <TeamSection name="App Development Team">
        <PersonBox name="somebody" caption="App Development Team Leader" />
        <PersonBox name="that" />
        <PersonBox name="I" />
        <PersonBox name="used" />
        <PersonBox name="to" />
      </TeamSection>
      <TeamSection name="Content Management Team">
        <PersonBox name="somebody" caption="Content Management Team Leader" />
        <PersonBox name="that" />
        <PersonBox name="I" />
        <PersonBox name="used" />
        <PersonBox name="to" />
      </TeamSection>
      <TeamSection name="Graphic Design Team">
        <PersonBox name="somebody" caption="Graphic Design Team Leader" />
        <PersonBox name="that" />
        <PersonBox name="I" />
        <PersonBox name="used" />
        <PersonBox name="to" />
      </TeamSection>
      <TeamSection name="Social Media Management Team">
        <PersonBox
          name="somebody"
          caption="Social Media Management Team Leader"
        />
        <PersonBox name="that" />
        <PersonBox name="I" />
        <PersonBox name="used" />
        <PersonBox name="to" />
      </TeamSection>
    </>
  );
}
