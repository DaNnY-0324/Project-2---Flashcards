import { useState } from "react";
import "../Flashcard.css";

const FlashcardList = ({ flashcard, quizMode, showAnswer }) => {
  const [flip, setFlip] = useState(false);

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

  const handleFlip = () => setFlip(!flip);

  return (
    <div
      className={`card ${getDifficultyColor()} ${flip ? "flip" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="question">
            <p>{flashcard.question}</p>
            {flashcard.image && (
              <div className="image-container">
                <img src={flashcard.image} alt={flashcard.question} />
              </div>
            )}
          </div>
          {quizMode && (
            <div className="choices">
              {flashcard.choices.map((choice) => (
                <button key={choice} className="choice-btn">
                  {choice}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="card-back">
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashcardList;
