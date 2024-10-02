import { useState } from "react";
import "../Flashcard.css";

const Flashcard = ({ flashcard, checkAnswer, quizMode, showAnswer }) => {
  const [flip, setFlip] = useState(false);

  const handleAnswerClick = (answer) => {
    checkAnswer(answer);
  };

  const getDifficultyColor = () => {
    switch (flashcard.difficulty) {
      case "easy":
        return "green-card";
      case "medium":
        return "yellow-card";
      case "hard":
        return "red-card";
      default:
        return "";
    }
  };

  return (
    <div
      className={`card ${getDifficultyColor()} ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="question">
            <p>{flashcard.question}</p>
          </div>

          {flashcard.image && quizMode ? (
            <div className="image-and-choices">
              <div className="choices">
                {flashcard.choices.map((choice) => (
                  <button
                    key={choice}
                    onClick={() => handleAnswerClick(choice)}
                    className="choice-btn"
                  >
                    {choice}
                  </button>
                ))}
              </div>
              <div className="image-container">
                <img src={flashcard.image} alt={flashcard.question} />
              </div>
            </div>
          ) : (
            <div className="choices">
              {flashcard.choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleAnswerClick(choice)}
                  className="choice-btn"
                >
                  {choice}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Back side */}
        <div className="card-back">
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
