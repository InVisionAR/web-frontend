import React from "react";
import "./question.css";

export default function MultipleChoice(props) {
  return (
    <div className="question">
      <h3>{props.questionTitle}</h3>
      <ul className="answer-choices">
        {props.answerChoices.map((choice) => {
          return (
            <li className="quiz-option">
              <input type="radio" className="quizOption" name="radioGroup" />
              {choice}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
