import { useState } from "react";
import "./FoodDecider.css";
import Header from "../../components/header/Header";
import Question from "./food-decider-components/Question";
import Recommendation from "./food-decider-components/Recommendation";

const MOCK_QUESTIONS = {
  id: "spicy",
  question: "Do you want something spicy?",
};

const MOCK_FOOD = {
  name: "Ramen",
  description: "A warm and savory noodle dish.",
  image: "/images/ramen.jpg",
};


function FoodDecider() {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const handleAnswer = (curr_answer) => {
    setQuestion(MOCK_QUESTIONS);

    setAnswer(curr_answer);

    setRecommendation(MOCK_FOOD);
  };

  const handleRestart = () => {
    setQuestion(MOCK_QUESTIONS);
    setAnswer(null);
    setRecommendation(null);
  };

  if (recommendation) {
    return (
      <>
        <Header />
        <main className="food-decider">

          <Recommendation
            food={recommendation}
            onRestart={handleRestart}
          />
        </main>
      </>

    );
  }
  return (
    <>
      <Header />
      <main className="food-decider">
        <header className="food-decider__header">
          <p className="food-decider__eyebrow">
            Help Me Decide
          </p>

          <h1>Let's find something to eat.</h1>

          <p>
            Answer a few questions and we'll find a food
            that matches your preferences.
          </p>
        </header>

        <Question
          question={question}
          onAnswer={handleAnswer}
        />
      </main>
    </>

  );
};



export default FoodDecider;
