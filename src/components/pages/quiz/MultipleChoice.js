import React from "react";
import "./question.css";

export default function MultipleChoice(props) {
  return (
    <div className="question">
      <h3 className="question-title">{props.questionTitle}</h3>
      <ul className="answer-choices">
        {props.answerChoices
          ? props.answerChoices.map((choice) => {
              return (
                <li className="quiz-option">
                  <input
                    type="radio"
                    className="radio-button"
                    name="radio-group"
                  />
                  {" " + choice}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
