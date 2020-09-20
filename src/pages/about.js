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
        <PersonBox
          name="Arnav Borborah"
          caption="Web Development Team Leader"
        />
        <PersonBox name="Rohan Kewalramani" />
        <PersonBox name="Johnny Ni" />
        <PersonBox name="Sergio Garcia Perez" />
        <PersonBox name="Venkatesh Kamath N" />
        <PersonBox name="Arianne Ghislaine Rull" />
        <PersonBox name="Yong Yan (Crystal) Liang" />
      </TeamSection>
      <TeamSection name="App Development Team">
        <PersonBox name="Sagar Patil" caption="App Development Team Leader" />
        <PersonBox name="Srikar Ganti" />
        <PersonBox name="Amandeep Saxena" />
        <PersonBox name="Brett Woltz" />
        <PersonBox name="Abhiram Tamvada" />
        <PersonBox name="Gautham Hari" />
        <PersonBox name="Elaine Nie" />
      </TeamSection>
      <TeamSection name="Content Management Team">
        <PersonBox name="somebody" caption="Content Management Team Leader" />
        <PersonBox name="Sahil Sharma" />
        <PersonBox name="Anisha Ganesh" />
        <PersonBox name="Kailash Senthilkumar" />
        <PersonBox name="Eunice Tovar" />
        <PersonBox name="Anastasija Petrovic " />
        <PersonBox name="Devish Vaid" />
        <PersonBox name="Rushi Patel" />
        <PersonBox name="Parshva Mehta" />
        <PersonBox name="Kanthi Makineedk" />
        <PersonBox name="Soumay Garg" />
        <PersonBox name="Adelene Chan" />
        <PersonBox name="Bethel Seyoum" />
        <PersonBox name="Abbas Moosajee" />
        <PersonBox name="Mia Chen" />
      </TeamSection>
      <TeamSection name="Graphic Design Team">
        <PersonBox name="somebody" caption="Graphic Design Team Leader" />
        <PersonBox name="Manav Chandaka" />
        <PersonBox name="Katharine Hong" />
        <PersonBox name="Marwan Abd Elhameed" />
        <PersonBox name="Hannah Nguyen" />
        <PersonBox name="Mona Wu" />
      </TeamSection>
      <TeamSection name="Social Media Management Team">
        <PersonBox
          name="somebody"
          caption="Social Media Management Team Leader"
        />
        <PersonBox name="Tiffani Baik" />
        <PersonBox name="Shubham Kumar" />
        <PersonBox name="Megan Hua" />
        <PersonBox name="Alina Zahra" />
        <PersonBox name="Simran Duggi" />
      </TeamSection>
    </>
  );
}
