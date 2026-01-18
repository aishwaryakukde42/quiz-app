import { useState } from "react";
import "./App.css"; // keep your CSS or create one

// Quiz data
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2,
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    correctAnswer: 2,
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a backend language?",
    options: ["HTML", "CSS", "Python", "React"],
    correctAnswer: 2,
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null); // reset selection for next question

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="quiz-container">
        <h2>Quiz Finished!</h2>
        <p>
          Your Score: {score} / {questions.length}
        </p>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>

      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <label key={index} className="option">
            <input
              type="radio"
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />
            {option}
          </label>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selectedOption === null}
        className="next-btn"
      >
        {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default App;
