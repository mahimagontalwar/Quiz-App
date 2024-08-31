// src/components/QuizQuestion.js
import React from 'react';

const QuizQuestion = ({ question, setQuestion }) => {
  const handleQuestionChange = (e) => {
    setQuestion({ ...question, question: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...question.options];
    updatedOptions[index] = value;
    setQuestion({ ...question, options: updatedOptions });
  };

  const handleCorrectAnswerChange = (e) => {
    setQuestion({ ...question, correctAnswer: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Question"
        value={question.question}
        onChange={handleQuestionChange}
      />
      {question.options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
        />
      ))}
      <input
        type="text"
        placeholder="Correct Answer"
        value={question.correctAnswer}
        onChange={handleCorrectAnswerChange}
      />
    </div>
  );
};

export default QuizQuestion;
