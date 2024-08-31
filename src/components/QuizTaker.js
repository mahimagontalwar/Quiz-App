// src/components/QuizTaker.js
import React, { useState, useEffect ,useCallback} from 'react';
import { useParams } from 'react-router-dom';

const QuizTaker = () => {
  const { id } = useParams();  // Extract quiz ID from the URL
  const [quiz, setQuiz] = useState(null);  // Holds the quiz data
  const [answers, setAnswers] = useState({});  // Tracks user answers
  const [score, setScore] = useState(null);  // Stores the final score
  const [timeRemaining, setTimeRemaining] = useState(300); // Timer set to 5 minutes (300 seconds)
  const [timerActive, setTimerActive] = useState(true);
  useEffect(() => {
    const fetchQuiz=()=>{
    
    // Fetch quizzes from localStorage
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    // Find the quiz with the matching ID
    const fetchedQuiz = quizzes.find((quiz) => quiz.id === parseInt(id));

    if (fetchedQuiz) {
      setQuiz(fetchedQuiz);
    } else {
      console.error('Quiz not found!');
      alert('Quiz not found!');
    }
}
    fetchQuiz();
  }, [id]);
  const handleSubmit = useCallback(() => {
    // Check if all questions have been answered
    const allAnswered = quiz.questions.every((_, index) => answers[index] !== undefined);
    
    if (!allAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }
    let calculatedScore = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setTimerActive(false);
  },[quiz,answers]);
  useEffect(() => {
    // Timer logic
    if (timerActive) {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerInterval);
            setTimerActive(false);
            handleSubmit(); // Auto-submit the quiz when time runs out
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timerActive,handleSubmit]);
  const handleOptionChange = (questionIndex, option) => {
    setAnswers({ ...answers, [questionIndex]: option });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!quiz) {
    return <div>Loading quiz...</div>;
  }

  return (
    <div>
      <h2>{quiz.title}</h2>
      <div style={{ marginBottom: '20px' }}>
        <h4>Time Remaining: {formatTime(timeRemaining)}</h4>
      </div>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {question.options.map((option, i) => (
            <label key={i} style={{ display: 'block', marginBottom: '5px' }}>
              <input
                type="radio"
                name={`question-${index}`}  // Ensures only one answer per question
                value={option}
                checked={answers[index] === option}
                onChange={() => handleOptionChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
        Submit Quiz
      </button>
      {score !== null && (
        <h3 style={{ marginTop: '20px' }}>
          Your Score: {score} / {quiz.questions.length}
        </h3>
      )}
    </div>
  );
};

export default QuizTaker;
