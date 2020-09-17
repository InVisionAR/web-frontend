import React from "react";
import "./question.css";

export default function NumericalAnswer(props) {
  return (
    <div className="question">
      <h3 className="question-title">{props.questionTitle}</h3>
      <div className="answer-choices">
        <input type="number" className="quiz-option" name="answer-group" />
      </div>
    </div>
  );
}
