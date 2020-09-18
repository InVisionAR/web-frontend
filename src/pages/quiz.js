import React from "react";
import MultipleChoice from "../components/pages/quiz/MultipleChoice";
import NumericalAnswer from "components/pages/quiz/NumericalAnswer";
import "./quiz.css";

const MCQ = [
  {
    questionTitle: "Largest Ocean in the world?",
    answerChoices: ["Pacific", "Indian", "Atlantic", "Arctic"],
    correctAnswer: "Pacific",
  },
  {
    questionTitle: "7th largest country?",
    answerChoices: ["India", "China", "USA"],
    correctAnswer: "India",
  },
];

const NAQ = [
  {
    questionTitle: "How many hours do you sleep per day?",
    correctAnswer: "8",
  },
];

export default function Quiz() {
  return (
    <section className="quiz-page">
      <div className="container">
        <h2 className="is-size-1 has-text-centered has-text-white">
          Time for a Quiz!
        </h2>
        <div>
          {MCQ.map((question) => {
            return (
              <MultipleChoice
                questionTitle={question.questionTitle}
                answerChoices={question.answerChoices}
              />
            );
          })}
        </div>
        <div>
          {NAQ.map((question) => {
            return <NumericalAnswer questionTitle={question.questionTitle} />;
          })}
        </div>
        {/* <div class="field has-text-centered submit-button">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div> */}
      </div>
    </section>
  );
}
