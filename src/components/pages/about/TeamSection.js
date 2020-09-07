import React from "react";

export default function TeamSection({ name, children }) {
  return (
    <section className="section team">
      <div className="container">
        <h1 className="title has-text-centered-mobile">{name}</h1>
        <div className="columns is-multiline">{children}</div>
      </div>
    </section>
  );
}
