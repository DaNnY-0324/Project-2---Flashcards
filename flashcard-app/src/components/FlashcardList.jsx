import "../Flashcard.css";

const FlashcardList = ({ flashcard, checkAnswer, quizMode, showAnswer }) => {
  return (
    <div
      className={`card ${showAnswer ? "flip" : ""}`}
      onClick={!quizMode ? checkAnswer : null}
    >
      <div className="card-inner">
        {/* Front side */}
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
        {/* Back side */}
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
