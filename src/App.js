// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateQuiz from './pages/CreateQuiz';
import QuizTaker from './components/QuizTaker';
import QuizList from './components/QuizList';  // New component to list quizzes
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quiz/:id" element={<QuizTaker />} />
          <Route path="/quiz" element={<QuizList />} />  {/* New route for /quiz */}
          <Route path="*" element={<Navigate to="/" />} />  {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
