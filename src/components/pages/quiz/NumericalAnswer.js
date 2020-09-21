import React from "react";
import "./question.css";

export default function NumericalAnswer(props) {
  return (
    <div className="question">
      <h3 className="question-title">{props.questionTitle}</h3>
      <div class="field answer-choices">
        <div class="control ">
          <input
            className="input quiz-option"
            type="number"
            placeholder="Enter answer"
          />
        </div>
      </div>
    </div>
  );
}
