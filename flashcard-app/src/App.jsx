import { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import ThemeSlider from "./components/ThemeSlider";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [index, setIndex] = useState(0);
  const [previousIndexes, setPreviousIndexes] = useState([]);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizMode, setQuizMode] = useState(true);

  const flashcards = [
    {
      id: 1,
      question: "What is the primary purpose of React?",
      answer: "Building user interfaces",
      choices: [
        "Building APIs",
        "Building databases",
        "Building user interfaces",
      ],
    },
    {
      id: 2,
      question: "What is a React component?",
      answer: "Reusable piece of UI",
      choices: [
        "Reusable piece of UI",
        "A function to fetch data",
        "A CSS file",
      ],
    },
    {
      id: 3,
      question:
        "What hook is used for state management in functional components?",
      answer: "useState",
      choices: ["useEffect", "useState", "useReducer"],
    },
    {
      id: 4,
      question: "What is JSX?",
      answer: "Syntax extension for JavaScript",
      choices: [
        "A new language",
        "Syntax extension for JavaScript",
        "A React library",
      ],
    },
    {
      id: 5,
      question: "What is a React Hook?",
      answer: "A function that lets you use state and lifecycle features",
      choices: [
        "A CSS framework",
        "A function that lets you use state and lifecycle features",
        "A type of component",
      ],
    },
    {
      id: 6,
      question: "How do you pass data to child components?",
      answer: "Using props",
      choices: ["Using props", "Using state", "Using events"],
    },
    {
      id: 7,
      question: "What does useEffect do?",
      answer: "Performs side effects in function components",
      choices: [
        "Performs API calls",
        "Handles events",
        "Performs side effects in function components",
      ],
    },
    {
      id: 8,
      question: "What does 'virtual DOM' refer to in React?",
      answer: "In-memory representation of the real DOM",
      choices: [
        "Real DOM",
        "In-memory representation of the real DOM",
        "A JavaScript function",
      ],
    },
    {
      id: 9,
      question: "How do you conditionally render components in React?",
      answer: "Using ternary or if statements",
      choices: ["Using props", "Using ternary or if statements", "Using loops"],
    },
    {
      id: 10,
      question: "How do you handle forms in React?",
      answer: "Using controlled components",
      choices: [
        "Using event listeners",
        "Using controlled components",
        "Using refs",
      ],
    },
    {
      id: 11,
      question: "How do you trigger re-rendering in a component?",
      answer: "By updating the state",
      choices: [
        "By updating the state",
        "By calling render()",
        "By updating the DOM",
      ],
    },
    {
      id: 12,
      question: "What is a key prop in React used for?",
      answer: "To uniquely identify list items",
      choices: [
        "To create unique IDs",
        "To uniquely identify list items",
        "To bind data",
      ],
    },
    {
      id: 13,
      question: "How do you handle side effects in React?",
      answer: "By using useEffect",
      choices: ["By using setState", "By using useEffect", "By using useState"],
    },
    {
      id: 14,
      question: "How do you memoize expensive computations in React?",
      answer: "Using useMemo",
      choices: ["Using useState", "Using useEffect", "Using useMemo"],
    },
    {
      id: 15,
      question: "What does useCallback do?",
      answer: "Returns a memoized version of a callback function",
      choices: [
        "It renders a component",
        "It memoizes state",
        "Returns a memoized version of a callback function",
      ],
    },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const showNextFlashcard = () => {
    if (index < flashcards.length - 1) {
      setPreviousIndexes([...previousIndexes, index]);
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setShowAnswer(false);
    setShowIncorrect(false);
  };

  const showPreviousFlashcard = () => {
    if (previousIndexes.length > 0) {
      const lastIndex = previousIndexes.pop();
      setIndex(lastIndex);
      setPreviousIndexes(previousIndexes);
    }
    setShowAnswer(false);
    setShowIncorrect(false);
  };

  const handleCheckAnswer = (userAnswer) => {
    if (userAnswer === flashcards[index].answer) {
      setShowAnswer(true);
      setTimeout(() => {
        showNextFlashcard();
      }, 1000);
    } else {
      setShowIncorrect(true);
      setTimeout(() => {
        setShowIncorrect(false);
      }, 1000);
    }
  };

  const handleFlashcardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="app-container">
      <h1>React.js Flashcards & Quiz</h1>

      <div className="mode-selector">
        <button
          onClick={() => setQuizMode(true)}
          className={quizMode ? "active" : ""}
        >
          Quiz
        </button>
        <ThemeSlider toggleTheme={toggleTheme} darkMode={darkMode} />
        <button
          onClick={() => setQuizMode(false)}
          className={!quizMode ? "active" : ""}
        >
          Flashcards
        </button>
      </div>

      {showIncorrect ? (
        <div className="incorrect-card">Incorrect!</div>
      ) : showAnswer && quizMode ? (
        <div className="answer-card">
          <p>Correct! The answer is {flashcards[index].answer}</p>
        </div>
      ) : (
        <FlashcardList
          flashcard={flashcards[index]}
          checkAnswer={quizMode ? handleCheckAnswer : handleFlashcardClick}
          quizMode={quizMode}
          showAnswer={showAnswer}
        />
      )}

      <div className="button-container">
        <button
          onClick={showPreviousFlashcard}
          disabled={previousIndexes.length === 0}
        >
          Previous
        </button>
        <button
          onClick={showNextFlashcard}
          disabled={!quizMode && showAnswer === false}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
