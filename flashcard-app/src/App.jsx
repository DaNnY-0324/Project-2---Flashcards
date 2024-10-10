import React, { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import ThemeSlider from "./components/ThemeSlider";
import "./App.css";
import logo from "./images/question1image.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [index, setIndex] = useState(0);
  const [previousIndexes, setPreviousIndexes] = useState([]);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false); // Prevent flip until correct
  const [quizMode, setQuizMode] = useState(true);
  const [testMode, setTestMode] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [allowNext, setAllowNext] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

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

  const toggleTheme = () => setDarkMode(!darkMode);

  // Random shuffle that maintains different difficulty levels
  const shuffleFlashcards = () => {
    const availableFlashcards = flashcards.filter(
      (card) => !masteredCards.includes(card.id)
    );

    const shuffled = [...availableFlashcards].sort(() => Math.random() - 0.5);

    const shuffledByDifficulty = shuffled.sort((a, b) => {
      const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
      return (
        Math.random() - 0.5 ||
        difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
      );
    });

    setIndex(0);
    setPreviousIndexes([]);
    setShowAnswer(false);
    setShowIncorrect(false);
    setFeedback("");
    setUserAnswer("");
    setFlashcards(shuffledByDifficulty);
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
    setFeedback("");
  };

  const showPreviousFlashcard = () => {
    if (previousIndexes.length > 0) {
      const lastIndex = previousIndexes.pop();
      setIndex(lastIndex);
      setPreviousIndexes(previousIndexes);
    } else {
      setIndex(flashcards.length - 1);
    }
    setShowAnswer(false);
    setShowIncorrect(false);
    setFeedback("");
  };

  const handleCorrectAnswer = () => {
    setShowAnswer(true); // Card will flip to show the answer only after correct answer
    setCurrentStreak(currentStreak + 1);
    setLongestStreak(Math.max(longestStreak, currentStreak + 1));
    setAllowNext(true); // Allow the user to proceed to the next card
  };

  const handleIncorrectAnswer = () => {
    setShowIncorrect(true);
    setCurrentStreak(0); // Reset streak on incorrect answer
    setTimeout(() => {
      setShowIncorrect(false);
    }, 1500);
  };

  // Partial correctness check (use localeCompare)
  const handleCheckAnswer = (userAnswer) => {
    if (
      userAnswer
        .toLowerCase()
        .localeCompare(flashcards[index].answer.toLowerCase(), undefined, {
          sensitivity: "base",
        }) === 0
    ) {
      setFeedback("Correct! Click Next.");
      handleCorrectAnswer();
    } else {
      setFeedback("Incorrect, Please try again.");
      handleIncorrectAnswer();
    }
  };

  const handleQuizAnswer = (choice) => {
    if (choice.toLowerCase() === flashcards[index].answer.toLowerCase()) {
      handleCorrectAnswer();
      setFeedback("Correct! Click Next.");
      setShowAnswer(true); // Card flips after correct answer
    } else {
      handleIncorrectAnswer();
      setFeedback("Incorrect!");
    }
  };

  const handleTestSubmit = () => {
    handleCheckAnswer(userAnswer);
    setUserAnswer("");
  };

  // Mark card as mastered
  const markAsMastered = (cardId) => {
    setMasteredCards([...masteredCards, cardId]);
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <h1>React.js Flashcards & Quiz</h1>

      <div className="mode-selector">
        <button
          onClick={() => {
            setQuizMode(true);
            setTestMode(false);
            setAllowNext(true);
          }}
          className={quizMode ? "active" : ""}
        >
          Quiz
        </button>
        <ThemeSlider toggleTheme={toggleTheme} darkMode={darkMode} />
        <button
          onClick={() => {
            setQuizMode(false);
            setTestMode(false);
            setAllowNext(true);
          }}
          className={!quizMode ? "active" : ""}
        >
          Flashcards
        </button>
        <button
          onClick={() => {
            setTestMode(true);
            setQuizMode(false);
            setAllowNext(false);
          }}
          className={testMode ? "active" : ""}
        >
          Test Mode
        </button>
      </div>

      {showIncorrect ? (
        <div className="incorrect-card">Incorrect!</div>
      ) : showAnswer && quizMode ? (
        <div className="answer-card">
          <p>{feedback}</p>
        </div>
      ) : (
        <FlashcardList
          flashcard={flashcards[index]}
          checkAnswer={quizMode ? handleQuizAnswer : null}
          quizMode={quizMode}
          testMode={testMode} // Pass testMode to FlashcardList
          showAnswer={showAnswer}
        />
      )}

      {testMode && !showAnswer && (
        <div className="test-mode">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer"
              style={{ marginBottom: "10px", width: "60%" }}
            />
            <button
              onClick={handleTestSubmit}
              style={{ alignSelf: "flex-start" }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="button-container">
        <button onClick={showPreviousFlashcard}>Previous</button>
        <button onClick={shuffleFlashcards}>Shuffle</button>
        <button onClick={showNextFlashcard} disabled={testMode && !allowNext}>
          Next
        </button>
        <button onClick={() => markAsMastered(flashcards[index].id)}>
          Mark as Mastered
        </button>
      </div>

      <div className="streak-counter">
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>

      <div className="feedback-message">
        <p>{feedback}</p>
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
