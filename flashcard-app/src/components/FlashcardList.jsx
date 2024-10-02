import "../Flashcard.css";

const FlashcardList = ({ flashcard, checkAnswer, quizMode, showAnswer }) => {
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
      className={`card ${getDifficultyColor()} ${showAnswer ? "flip" : ""}`}
      onClick={!quizMode ? checkAnswer : null}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="question">
            <p>{flashcard.question}</p>
          </div>
          {quizMode && (
            <div className="choices">
              {flashcard.choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() => checkAnswer(choice)}
                  className="choice-btn"
                >
                  {choice}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="card-back">
          <div className="answer">
            <p>{flashcard.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardList;
