import { useState } from "react";
import "../Flashcard.css";

const Flashcard = ({ flashcard, checkAnswer }) => {
  const [flip, setFlip] = useState(false);

  const handleAnswerClick = (answer) => {
    checkAnswer(answer);
  };

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="card-inner">
        {/* Front side */}
        <div className="card-front">
          <div className="question">
            <p>{flashcard.question}</p>
          </div>
          <div className="choices">
            {flashcard.choices.map((choice) => (
              <button
                key={choice}
                onClick={() => handleAnswerClick(choice)}
                className={`choice-btn ${
                  choice === flashcard.answer ? "correct" : ""
                }`}
              >
                {choice}
              </button>
            ))}
          </div>
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
