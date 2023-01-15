import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Banaras", isCorrect: false },
        { id: 1, text: "Lucknow", isCorrect: false },
        { id: 2, text: "Mumbai", isCorrect: false },
        { id: 3, text: "New Delhi", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of India written?",
      options: [
        { id: 0, text: "1950", isCorrect: true },
        { id: 1, text: "1947", isCorrect: false },
        { id: 2, text: "1948", isCorrect: false },
        { id: 3, text: "1949", isCorrect: false },
      ],
    },
    {
      text: "Who was the Prime Minister of the India?",
      options: [
        { id: 0, text: "Narendra Modi", isCorrect: true },
        { id: 1, text: "Sonia Gandhi", isCorrect: false },
        { id: 2, text: "Amit Shah", isCorrect: false },
        { id: 3, text: "Arvind Kejriwal", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the India?",
      options: [
        { id: 0, text: "Maharastra", isCorrect: false },
        { id: 1, text: "Uttar Pradesh", isCorrect: true },
        { id: 2, text: "Madhya Pradesh", isCorrect: false },
        { id: 3, text: "Bihar", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the India?",
      options: [
        { id: 0, text: "Bangladesh", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Sri Lanka", isCorrect: true },
        { id: 3, text: "Pakistan", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>India Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;