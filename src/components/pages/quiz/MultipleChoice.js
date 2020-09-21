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
                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input
                        type="radio"
                        name="question"
                        className="quiz-option"
                      />
                      {" " + choice}
                    </label>
                  </div>
                </div>
              );
            })
          : null}
      </ul>
    </div>
  );
}
