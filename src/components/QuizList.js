// src/components/QuizList.js
import React from 'react';
import { Link } from 'react-router-dom';

const QuizList = () => {
  // Fetch quizzes from localStorage
  const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
   console.log(quizzes);
  if (quizzes.length === 0) {
    return <div>No quizzes available. Please create one first!</div>;
  }

  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz,id) => (
          <li key={id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
