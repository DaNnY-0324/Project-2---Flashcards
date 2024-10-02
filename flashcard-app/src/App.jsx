import React, { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import ThemeSlider from "./components/ThemeSlider";
import "./App.css";
import logo from "../public/images/question1image.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [index, setIndex] = useState(0);
  const [previousIndexes, setPreviousIndexes] = useState([]);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizMode, setQuizMode] = useState(true);

  const flashcards = [
    // Easy Questions
    {
      id: 1,
      question: "What is the primary purpose of React?",
      answer: "Building user interfaces",
      choices: [
        "Building APIs",
        "Building databases",
        "Building user interfaces",
      ],
      images: "/images/question1image.png",
      difficulty: "easy",
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
      images: "/images/question2image.png",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "What hook is used for state management in functional components?",
      answer: "useState",
      choices: ["useEffect", "useState", "useReducer"],
      images: "/images/question3image.png",
      difficulty: "easy",
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
      image: "/images/question4image.png",
      difficulty: "easy",
    },
    {
      id: 5,
      question: "How do you pass data to child components?",
      answer: "Using props",
      choices: ["Using props", "Using state", "Using events"],
      images: "/images/question5image.png",
      difficulty: "easy",
    },
    {
      id: 6,
      question: "What does useEffect do?",
      answer: "Performs side effects in function components",
      choices: [
        "Performs API calls",
        "Handles events",
        "Performs side effects in function components",
      ],
      images: "/images/question6image.png",
      difficulty: "easy",
    },
    {
      id: 7,
      question: "What does 'virtual DOM' refer to in React?",
      answer: "In-memory representation of the real DOM",
      choices: [
        "Real DOM",
        "In-memory representation of the real DOM",
        "A JavaScript function",
      ],
      difficulty: "easy",
    },
    {
      id: 8,
      question: "How do you conditionally render components in React?",
      answer: "Using ternary or if statements",
      choices: ["Using props", "Using ternary or if statements", "Using loops"],
      difficulty: "easy",
    },
    {
      id: 9,
      question: "How do you handle forms in React?",
      answer: "Using controlled components",
      choices: [
        "Using event listeners",
        "Using controlled components",
        "Using refs",
      ],
      difficulty: "easy",
    },
    {
      id: 10,
      question: "How do you trigger re-rendering in a component?",
      answer: "By updating the state",
      choices: [
        "By updating the state",
        "By calling render()",
        "By updating the DOM",
      ],
      difficulty: "easy",
    },

    // Medium Questions
    {
      id: 11,
      question: "What is a key prop in React used for?",
      answer: "To uniquely identify list items",
      choices: [
        "To create unique IDs",
        "To uniquely identify list items",
        "To bind data",
      ],
      difficulty: "medium",
    },
    {
      id: 12,
      question: "How do you handle side effects in React?",
      answer: "By using useEffect",
      choices: ["By using setState", "By using useEffect", "By using useState"],
      difficulty: "medium",
    },
    {
      id: 13,
      question: "How do you memoize expensive computations in React?",
      answer: "Using useMemo",
      choices: ["Using useState", "Using useEffect", "Using useMemo"],
      difficulty: "medium",
    },
    {
      id: 14,
      question: "What does useCallback do?",
      answer: "Returns a memoized version of a callback function",
      choices: [
        "It renders a component",
        "It memoizes state",
        "Returns a memoized version of a callback function",
      ],
      difficulty: "medium",
    },
    {
      id: 15,
      question: "How do you create a functional component in React?",
      answer: "By creating a function that returns JSX",
      choices: [
        "By extending React.Component",
        "By using the useState hook",
        "By creating a function that returns JSX",
      ],
      difficulty: "medium",
    },
    {
      id: 16,
      question: "How do you manage global state in React?",
      answer: "Using Context API",
      choices: ["Using local state", "Using Context API", "Using props"],
      difficulty: "medium",
    },
    {
      id: 17,
      question: "What is React's Strict Mode used for?",
      answer: "To highlight potential issues in the application",
      choices: [
        "To restrict function usage",
        "To highlight potential issues",
        "To enforce CSS rules",
      ],
      difficulty: "medium",
    },
    {
      id: 18,
      question:
        "What lifecycle method would you use to fetch data in class components?",
      answer: "componentDidMount",
      choices: ["componentDidMount", "render", "componentWillUnmount"],
      difficulty: "medium",
    },
    {
      id: 19,
      question: "What is the use of PropTypes in React?",
      answer: "To enforce type-checking for props",
      choices: [
        "To define component state",
        "To enforce type-checking for props",
        "To initialize props",
      ],
      difficulty: "medium",
    },
    {
      id: 20,
      question:
        "What is the default behavior of useEffect when no dependencies are provided?",
      answer: "It runs after every render",
      choices: [
        "It runs once",
        "It runs after every render",
        "It does not run",
      ],
      difficulty: "medium",
    },

    // Hard Questions
    {
      id: 21,
      question: "What is the difference between useMemo and useCallback?",
      answer: "useMemo memoizes the result, useCallback memoizes the function",
      choices: [
        "useMemo memoizes the function, useCallback memoizes the result",
        "useMemo memoizes the result, useCallback memoizes the function",
        "Both memoize functions",
      ],
      difficulty: "hard",
    },
    {
      id: 22,
      question: "What does React's Error Boundary component do?",
      answer: "Catches JavaScript errors in child components",
      choices: [
        "Handles network errors",
        "Catches JavaScript errors in child components",
        "Resets component state",
      ],
      difficulty: "hard",
    },
    {
      id: 23,
      question: "What is React.lazy used for?",
      answer: "To lazy load components",
      choices: [
        "To load components asynchronously",
        "To cache component data",
        "To lazy load components",
      ],
      difficulty: "hard",
    },
    {
      id: 24,
      question: "How can you optimize performance in large React applications?",
      answer: "By using code splitting and lazy loading",
      choices: [
        "By memoizing every component",
        "By using code splitting and lazy loading",
        "By minimizing state",
      ],
      difficulty: "hard",
    },
    {
      id: 25,
      question: "What is reconciliation in React?",
      answer: "The process of updating the DOM efficiently",
      choices: [
        "The process of updating the DOM efficiently",
        "Managing state updates",
        "Handling asynchronous code",
      ],
      difficulty: "hard",
    },
    {
      id: 26,
      question: "What is React Fiber?",
      answer: "A new reconciliation engine for React",
      choices: [
        "A new version of React",
        "A rendering method",
        "A new reconciliation engine for React",
      ],
      difficulty: "hard",
    },
    {
      id: 27,
      question: "How do you prevent a component from re-rendering in React?",
      answer: "By using React.memo or shouldComponentUpdate",
      choices: [
        "By using useEffect",
        "By using React.memo or shouldComponentUpdate",
        "By removing the component from the DOM",
      ],
      difficulty: "hard",
    },
    {
      id: 28,
      question: "What is React Portals used for?",
      answer: "To render components outside of the parent DOM hierarchy",
      choices: [
        "To create portals for API calls",
        "To render components outside of the parent DOM hierarchy",
        "To manage component state",
      ],
      difficulty: "hard",
    },
    {
      id: 29,
      question:
        "How do you handle performance bottlenecks caused by large component trees?",
      answer: "By using useMemo and React.memo",
      choices: [
        "By using useEffect",
        "By splitting the component",
        "By using useMemo and React.memo",
      ],
      difficulty: "hard",
    },
    {
      id: 30,
      question: "How can you track render times of components?",
      answer: "By using React Profiler",
      choices: [
        "By using console logs",
        "By using React Profiler",
        "By using setState",
      ],
      difficulty: "hard",
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

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
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
          checkAnswer={quizMode ? handleCheckAnswer : null}
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

      <div className="difficulty-legend">
        <span>🟢 Easy</span>
        <span>🟡 Medium</span>
        <span>🔴 Hard</span>
      </div>
    </div>
  );
}

export default App;
