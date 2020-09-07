import React from "react";
import "./PersonBox.css";

export default function PersonBox({ name, caption = "" }) {
  const captionHtml =
    caption !== "" ? <p className="caption">{caption}</p> : "";

  return (
    <div className="column is-one-fifth person-box">
      <div className="box is-flex">
        <figure className="image is-128x128">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            alt={name}
          />
        </figure>
        <p className="person-name">{name}</p>
        {captionHtml}
      </div>
    </div>
  );
}
