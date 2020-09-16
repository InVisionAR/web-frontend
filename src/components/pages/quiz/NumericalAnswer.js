import React from "react";
import "./question.css";

export default function NumericalAnswer(props) {
  return (
    <div className="question">
      <h3>{props.questionTitle ? props.questionTitle : "Question"}</h3>
      <div className="numerical-box">
        <input type="number" className="quizOption" name="answerGroup" />
      </div>
    </div>
  );
}
