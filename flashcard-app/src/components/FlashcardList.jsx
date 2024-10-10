import { useState } from "react";
import "../Flashcard.css";

const FlashcardList = ({
  flashcard,
  checkAnswer,
  quizMode,
  testMode,
  showAnswer,
}) => {
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

  // Prevent flipping if in test mode and the answer is not yet correct
  const handleFlip = () => {
    if (!testMode || showAnswer) {
      // Only allow flip if not in test mode or if answer is correct
      setFlip(!flip);
    }
  };

  return (
    <div
      className={`card ${getDifficultyColor()} ${flip ? "flip" : ""}`}
      onClick={handleFlip} // Only allow flipping based on mode and answer correctness
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
                <button
                  key={choice}
                  className="choice-btn"
                  onClick={() => checkAnswer(choice)}
                >
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
