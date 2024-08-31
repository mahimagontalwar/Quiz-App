// src/components/QuizForm.js
import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';

const QuizForm = ({ quiz, setQuiz }) => {
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''], // Four options by default
    correctAnswer: '',
  });
  const [error, setError] = useState('');
  const addQuestion = () => {
    if (quiz.title.trim() === '') {
        setError('Quiz title cannot be empty.');
        return;
      }
      if(newQuestion.question.trim()===''){
        setError('Quiz Question cannot be empty.');
        return;
      }
      const hasEmptyOptions = newQuestion.options.some(value => value === '');
      if(hasEmptyOptions){
      setError("Quiz doesn't have all the options");
      alert('Please provide all the options for the question');
          return;
      }
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, newQuestion],
    });
    setNewQuestion({ question: '', options: ['', '', '', ''], correctAnswer: '' });
     setError('');
};

  const handleTitleChange = (e) => {
    setQuiz({ ...quiz, title: e.target.value });
    if (e.target.value.trim() !== '') {
        setError('');
      }
  };

  return (
    <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Quiz Title"
        value={quiz.title}
        onChange={handleTitleChange}
        required
      />
        
      <QuizQuestion question={newQuestion} setQuestion={setNewQuestion} />
      <button onClick={addQuestion}>Add Question</button>
      <div>
        <h3>Questions:</h3>
        {quiz.questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
            <p>Correct Answer: {q.correctAnswer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizForm;
