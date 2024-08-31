// src/pages/CreateQuiz.js
import React, { useState } from 'react';
import QuizForm from '../components/QuizForm';

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState({
    title: '',
    questions: [],
  });

  const handleSaveQuiz = () => {
    if(quiz.title.trim()===""){
      alert("Quiz Doesnt have title ,provide title");
      return;
    }
    // Get existing quizzes from localStorage or initialize an empty array
    const existingQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

    // Assign an ID to the quiz (use the length of the array as a simple ID)
    const newQuiz = { ...quiz, id: existingQuizzes.length + 1 };

    // Save the new quiz to localStorage
    localStorage.setItem('quizzes', JSON.stringify([...existingQuizzes, newQuiz]));

    alert('Quiz saved successfully!');
  };

  return (
    <div>
      <h2>Create a New Quiz</h2>
      <QuizForm quiz={quiz} setQuiz={setQuiz} />
      <button onClick={handleSaveQuiz}>Save Quiz</button>
    </div>
  );
};

export default CreateQuiz;
