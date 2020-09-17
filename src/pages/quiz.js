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
    <div className="container">
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
    </div>
  );
}
